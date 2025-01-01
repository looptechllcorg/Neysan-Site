import {  createContext, useContext, useState } from "react";

const dataContext = createContext(null)

const DataContextProvider = ({children})=>{
    const [searchInputValue, setSearchInputValue]=useState("")

    const values = {searchInputValue,setSearchInputValue};
    return <dataContext.Provider value={values}>{children}</dataContext.Provider>;
}

const useDataContext = () => useContext(dataContext);

export { useDataContext, DataContextProvider }; 