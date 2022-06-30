import React from "react";
import Stories from "./Stories";
import Pagination from "./Pagination";
import { Search } from "./Search";
import "./App.css";
const App = ()=> {
//  const data = useContext(AppContext);
  return (
    <div> 
        <Search/>
        <Pagination/>
        <Stories/>
    </div>  
    )
}

export default App;