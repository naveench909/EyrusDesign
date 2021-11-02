import React, { useState, useContext , useEffect} from 'react';
import { progress , reporting , projectSetting , emailSubscription } from '../Data/dummyData';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [menuValue , setMenuValue] = useState("Project Setting");
  const [sidebarValue , setSidebarValue] = useState("Email Subscription");
  const [isBrowser , setIsBrowser] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);  

  const openSidebar = () => {
    setIsSidebarOpen(true);
    // console.log("hello")
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const updateMenuValue = (value) => {
    setMenuValue(value);
    setShowModal(false);
    setSidebarValue(menuValue);
  }

  useEffect(() => {
  }, [menuValue])

  const showMenuModal = () =>{
    setShowModal(!showModal);
}

  const onClose = () => {
    setShowModal(!showModal)
  }

  return (
    <AppContext.Provider
      value={{
        menuValue , isBrowser ,showModal, emailSubscription, sidebarValue ,isSidebarOpen, progress , reporting , projectSetting,
        openSidebar, closeSidebar, setSidebarValue ,onClose , showMenuModal,setShowModal,setIsBrowser, setMenuValue , updateMenuValue ,
        
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };