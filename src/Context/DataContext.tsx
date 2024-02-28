//generate a data fetching context serviing some data
import { createContext, useState, useContext } from "react";
import { mockLinks } from "./MockData";
import { UserLink } from "../models/UserLink";

const mockNewLink = {
  id: "link5",
  nickname: "myApp5",
  url: "https://github.com/JasonSimms/5y",
  notes: "none5",
}; //TODO REMOVE

const createMockLink = (url: string, nickname: string) => {
  return {
    url,
    nickname,
    notes: "some mocked notes",
    id: Math.random().toString(),
  };
};

interface AppDataContextProps {
  userLinks: UserLink[];
  addUserLink?: (url: string, nickname: string) => void;
  updateUserLink?: (id: string, upDatedLink: UserLink) => void;
  deleteUserLink?: (id: string) => void;
}

const defaultState = {
  userLinks: mockLinks,
};

const AppDataContext = createContext<AppDataContextProps>(defaultState);

export const AppDataProvider: FC<
  React.PropsWithChildren<Record<string, never>>
> = ({ children }) => {
  const [userLinks, setUserLinks] = useState(defaultState.userLinks);

  const addUserLink = (url: string, nickname: string) => {
    console.log("addUserLink", url, nickname);
    const newLink = createMockLink(url, nickname);
    setUserLinks((prev) => [...prev, newLink]);
  };

  const updateUserLink = (id: string, upDatedLink: UserLink) => {
    console.log("updateUserLink", id);
    // setUserLinks((prev) => [...prev, newUserLink]);
  };
  const deleteUserLink = (id: string) => {
    console.log("delete", id);
    setUserLinks((prev) => prev.filter((link) => link.id !== id));
  };
  return (
    <AppDataContext.Provider
      value={{
        userLinks,
        addUserLink,
        updateUserLink,
        deleteUserLink,
      }}
    >
      {children}
    </AppDataContext.Provider>
  );
};

export const useAppDataContext = () => useContext(AppDataContext);
export default AppDataContext;
