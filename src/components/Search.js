import React from 'react'
import Sidebar from './Sidebar';
import MainFeedHeader from "./MainFeedHeader"
import InputSearchBox from "./InputSearchBox";
import '../App.css';



const Search = () => {
  return (
    <div className="App">
      <Sidebar/>
      <InputSearchBox/>
    </div>
  )
}

export default Search;