import React from 'react';
import { useGlobalContext } from './context';


export const Search = () => {
  const {query, searchPost} = useGlobalContext();
  return (
    <>
      <h1> Singhal Technical Tech Website</h1>
      <form>
        <div>
          <input type = "text" placeholder='Search here'
          value = {query}
          onChange = {(e) => searchPost(e.target.value)}
          ></input>
        </div>
      </form>
    </>
  )
}
