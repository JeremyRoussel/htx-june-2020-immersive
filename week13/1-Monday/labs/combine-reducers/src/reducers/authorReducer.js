import {ADD_AUTHOR, REMOVE_AUTHOR} from '../actions/actionTypes'

let initState = {
    authors: []
}

let idx;

let authorReducer = (state =initState, action) => {

    switch (action.type) {
    
        case ADD_AUTHOR:
          return {
            ...state,
            authors: [...state.authors, action.author]
          };
    
        case REMOVE_AUTHOR:
          idx = state.authors.findIndex(author => author.id === action.id);
          return {
            ...state,
            authors: [...state.authors.slice(0, idx), ...state.authors.slice(idx + 1)]
          };

        default:
          return state
    
    }
}

export default authorReducer