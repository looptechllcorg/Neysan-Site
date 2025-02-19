import {  createContext, useContext, useState } from "react";

import { productsData } from "../MyDatas/MyDatas";
import { useTranslation } from "react-i18next";

const dataContext = createContext(null)

const DataContextProvider = ({children})=>{
    const [searchInputValue, setSearchInputValue]=useState("")
    const [filteredItems, setFilteredItems]=useState([])
    const {t} = useTranslation()

    // console.log("Products DATA", productsData);
    const searchFunctions = ()=>{
        // console.log("searchVAlue" , searchInputValue.toLocaleLowerCase());
        
       setFilteredItems( productsData.filter((item)=>{
        // console.log("Items Name",);
            let changeLanguageName = t(item.productName).toLocaleLowerCase()
        return changeLanguageName.includes(searchInputValue.toLocaleLowerCase())
    }))
    // console.log("Filtered ITems",filteredItems);
    
    }
    

    const values = {searchInputValue,setSearchInputValue,filteredItems,searchFunctions};
    return <dataContext.Provider value={values}>{children}</dataContext.Provider>;
}

const useDataContext = () => useContext(dataContext);

export { useDataContext, DataContextProvider }; 