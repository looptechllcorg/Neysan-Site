import {  createContext, useContext, useState } from "react";
import { productsData } from "../MyDatas/MyDatas";

const dataContext = createContext(null)

const DataContextProvider = ({children})=>{
    const [searchInputValue, setSearchInputValue]=useState("")
    const [filteredItems, setFilteredItems]=useState([])

    // console.log("Products DATA", productsData);
    const searchFunctions = ()=>{
        // console.log("searchVAlue" , searchInputValue.toLocaleLowerCase());
        
       setFilteredItems( productsData.filter((item)=>{
        // console.log("Items Name",item.productName.toLocaleLowerCase());
        
        return item.productName.toLocaleLowerCase().includes(searchInputValue.toLocaleLowerCase())
    }))
    // console.log("Filtered ITems",filteredItems);
    
    }
    

    const values = {searchInputValue,setSearchInputValue,filteredItems,searchFunctions};
    return <dataContext.Provider value={values}>{children}</dataContext.Provider>;
}

const useDataContext = () => useContext(dataContext);

export { useDataContext, DataContextProvider }; 