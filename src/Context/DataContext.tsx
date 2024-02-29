//generate a data fetching context serviing some data
import { createContext, useState, useContext, useEffect } from "react";
import { mockLinks } from "./MockData";
import { UserLink } from "../models/UserLink";
import {
  createUserLink,
  deleteUserLinkFromDB,
  getUserLinksFromDB,
} from "../services/ApiServices";
import { useAuth } from "./AuthContext";

interface AppDataContextProps {
  userLinks: UserLink[];
  addUserLink?: (url: string, nickname: string) => void;
  // updateUserLink?: (id: string, upDatedLink: UserLink) => void;
  deleteUserLink?: (id: string) => void;
  resetDataContext?: () => void;
}

interface AppDataProviderProps {
  children: React.ReactNode;
}

const defaultState = {
  userLinks: mockLinks,
};

export const AppDataContext = createContext<AppDataContextProps>(defaultState);

export const AppDataProvider: React.FC<AppDataProviderProps> = ({
  children,
}) => {
  const [userLinks, setUserLinks] = useState([] as UserLink[]);
  const { currentUser } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      console.log("fetching data");
      const links = await getUserLinksFromDB();
      if (typeof links === "string") {
        const parsedLinks = JSON.parse(links) as UserLink[];
        setUserLinks(parsedLinks);
      }
    };
    fetchData();
  }, [currentUser]);

  const addUserLink = async (nickname: string, url: string) => {
    const userLink = await createUserLink(nickname, url);
    const parsedUserLink = JSON.parse(userLink) as UserLink;
    console.log("userLink", parsedUserLink);
    setUserLinks((prev) => [...prev, parsedUserLink]);
  };

  // const updateUserLink = (id: string, upDatedLink: UserLink) => {
  //   console.log("updateUserLink", id);
  //   // setUserLinks((prev) => [...prev, newUserLink]);
  // };
  const deleteUserLink = async (id: string) => {
    await deleteUserLinkFromDB(id);
    setUserLinks((prev) => prev.filter((link) => link.id !== id));
  };
  return (
    <AppDataContext.Provider
      value={{
        userLinks,
        addUserLink,
        // updateUserLink,
        deleteUserLink,
      }}
    >
      {children}
    </AppDataContext.Provider>
  );
};

export const useAppDataContext = () => useContext(AppDataContext);
export default AppDataContext;
