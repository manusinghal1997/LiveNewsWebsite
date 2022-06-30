const reducer = (state, action) => {

    switch(action.type){
        case "SET_LOADING":{
            return {
                ...state,
                isLoading: true
            };
        }
        case "REMOVE_POST":
            
            return {
                ...state,
                hits: state.hits.filter((curElem) => curElem.objectID !== action.payload)
            }
        
        case "SEARCH_POST":{
            console.log("inside the reducer search fun")
            return {
                ...state,
                query: action.payload
            }
        }
        
        case "GET_STORIES":
            return {
                 ...state,
                 isLoading: false,
                 hits: action.payload.hits,
                 nbPages: action.payload.nbPages,

            };
            
        

        case "NEXT_PAGE":{
            let pageNum = state.page + 1;
            if(pageNum >= state.nbPages) {
                pageNum = 0;
             }   
            
            return {
                ...state,
                page: pageNum,
            };
        }
        case "PREV_PAGE":{
            let pageNum = state.page-1;
            if(pageNum < 1){
                pageNum = 0;
            }

            return{
                ...state,
                page: pageNum,
            }
        }
    }

    return state;
};  

export default reducer;