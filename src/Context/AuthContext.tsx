import {
  useContext,
  useState,
  useEffect,
  createContext,
  ReactNode,
} from "react";
import { auth } from "./firebaseconfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
// import { FirebaseService } from "../services/FirestoreServices";
// import { User } from '../models/User';
import { getAuth } from "firebase/auth";
// import * as admin from "firebase-admin";
import {
  GoogleAuthProvider,
  signInWithPopup,
  // getAdditionalUserInfo,
} from "firebase/auth";

import { AuthUser } from "../models/AuthUser";

// Context for the Auth Provider
interface AuthContextProps {
  currentUser: AuthUser | null;
  login: (email: string, password: string) => Promise<any>;
  signup: (
    email: string,
    password: string
    // displayName: string
  ) => Promise<{}>;
  logout: () => Promise<void>;
  proceedWithGooglePopup: () => Promise<void>;
  // resetPassword: (email: string) => Promise<void>;
  // updateEmail: (email: string) => Promise<void>;
  // updatePassword: (password: string) => Promise<void>;
}

//Create the context
const AuthContext = createContext<AuthContextProps | undefined>(undefined);

//Generic type for all children
interface AuthProviderProps {
  children: ReactNode;
}

// Function component that provides authentication context to its children
export function useAuth(): AuthContextProps {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export function AuthProvider({ children }: AuthProviderProps): JSX.Element {
  const [currentUser, setCurrentUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  async function proceedWithGooglePopup() {
    const myAuth = getAuth();
    await signInWithPopup(myAuth, new GoogleAuthProvider());
    setLoading(false);
  }

  /**
   * Signup Flow for new user from Firebase
   *
   * @param email - user provided email string
   * @param password - user provided password string
   */
  async function signup(
    email: string,
    password: string
    // displayName: string
  ): Promise<{}> {
    console.log("signup init");
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      ); //Firebase Auth
      const user = userCredential.user;
      // console.log("user recieved", user);
      return user;

      // const firebaseService = new FirebaseService(); //Firestore User doc creation
      // await firebaseService.createUser(email, user.uid, displayName);
    } catch (error: unknown) {
      if (error instanceof Error) {
        // Use the specific Error type
        console.error("Sign-up error:", error.message);
        return Promise.reject(error);
      } else {
        // Fallback for other types of errors
        return Promise.reject(new Error("An error occurred during sign-up"));
      }
    }
  }

  /**
   * Login Process from Firebase
   *
   * @param email - user provided email string
   * @param password - user provided password string
   */
  async function login(email: string, password: string): Promise<any> {
    console.log("login", email, password);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // const user = userCredential.user;
      setLoading(false);
    } catch (error: unknown) {
      if (error instanceof Error) {
        // Use the specific Error type
        console.error("Sign-up error:", error.message);
        return;
      } else {
        // Fallback for other types of errors
        console.error("An error occurred during sign-up:", error);
        return;
      }
    }
  }

  /**
   *
   * Logout from Firebase
   */
  function logout(): Promise<void> {
    return auth.signOut();
  }

  // function resetPassword(email: string): Promise<void> {
  //   return auth.sendPasswordResetEmail(email);
  // }

  // function updateEmail(email: string): Promise<void> {
  //   return currentUser?.updateEmail(email) ?? Promise.resolve();
  // }

  // function updatePassword(password: string): Promise<void> {
  //   return currentUser?.updatePassword(password) ?? Promise.resolve();
  // }

  // Effect hook to set up an observer for changes in authentication state
  useEffect(() => {
    // Subscribe to changes in authentication state
    const unsubscribe = auth.onAuthStateChanged((user) => {
      // Update the current user state when the authentication state changes
      // console.log('auth state changed what is available? ', user);
      setCurrentUser(
        user
          ? {
              uid: user.uid,
              email: user.email || "",
              displayName: user.displayName || "",
              photoUrl: user.photoURL || "",
            }
          : null
      );

      // if (!user) {
      //   // User is logged out, reset the DataContext
      //   resetDataContext();
      // }

      // Set loading to false once authentication state is determined
      setLoading(false);
    });

    // Cleanup: Unsubscribe from the authentication state observer on component unmount
    return unsubscribe;
  }, []);

  // Define the value for the authentication context
  const value: AuthContextProps = {
    currentUser, // Current authenticated user information
    login, // Function to handle user login (not shown in the provided code)
    signup, // Function to handle user signup (not shown in the provided code)
    logout, // Function to handle user logout (not shown in the provided code)
    proceedWithGooglePopup,
    // Additional functions (e.g., resetPassword, updateEmail, updatePassword) may be added as needed
  };

  // Provide the authentication context to its children
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
