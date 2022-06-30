// context creation
// provider we need provide to send data to consumer
// consumer lengthy that's why it is removed( now we are using context hook)
// useContext hook

import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

let API = "https://hn.algolia.com/api/v1/search?";

const initialState = {
    query: "CSS",
    nbPages: 0,
    page: 0,
    hits: [],
    isLoading: true,
};
 

const AppContext = React.createContext();


// to create a provider function

const AppProvider = ({children}) => {
   // const [state, setState] = useState(initialState);
    const [state, dispatch] = useReducer(reducer, initialState);
    const fetchApiData = async (url) => {
        
        dispatch({ type: "SET_LOADING" });
        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
       
            dispatch({
                type: "GET_STORIES",
                payload: {
                    hits: data.hits,
                    nbPages: data.nbPages,
                },
            });
        } catch(error){
            console.log(error);
        }
    }

    // to remove post

    const removePost = (post_ID) => {
        console.log("inside removepost", post_ID);
        dispatch({type: "REMOVE_POST", payload: post_ID});
    }

    const searchPost = (searchQuery) => {
        console.log("searching query");
        console.log(searchQuery);
        dispatch({type: "SEARCH_POST", payload: searchQuery});
    }

    const getNextPage = () => {
        console.log("next called")
        dispatch({
            type: "NEXT_PAGE",
        })
    }
    const getPrevPage = () => {
        dispatch({
            type: "PREV_PAGE"
        });
    };

    useEffect(() => {
        fetchApiData(`${API}query=${state.query}&page=${state.page}`);
//    }, []);   
    }, [state.query, state.page]);  // jab tak meri state.query change hogi tab tab muje fetchapidata ko call krna hai


    return  (<AppContext.Provider value = { { ...state, removePost, searchPost, getNextPage, getPrevPage }}>{children}</AppContext.Provider>); // its means we can use these in any pages anytime

};
 



// custom hook creation (when you return hook inside a component or function)

 const useGlobalContext = () => {
     return useContext(AppContext);
 };

export { AppContext, AppProvider,useGlobalContext };










