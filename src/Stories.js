import React from 'react'
import { useGlobalContext } from './context';

 const Stories = () => {

    const { hits, isLoading, removePost } = useGlobalContext();

    
    if(isLoading){
        return <>
            <h2>Loading...</h2>
        </>
    }
     
    return (
        <>
        <div className = "stories-div">
            <h2>My Tech News Post</h2>
            {hits.map((curPost) => {
                const {title, auther, objectID, url, num_comments}  = curPost;
                return (
                
                <div className="card" key={objectID}>
                     <h2>{title} </h2>
                     <p>
                        By {auther} | <span> {num_comments} </span> comments</p>
                     <div className="card-button">
                        <a href={url} target="_bank">
                            Read More
                        </a>
                        <button onClick={()=>removePost(objectID)}>remove</button>
                     </div>
                    </div>
                
                 );
            })}
            </div>
        </>
    );
}

export default Stories; 
