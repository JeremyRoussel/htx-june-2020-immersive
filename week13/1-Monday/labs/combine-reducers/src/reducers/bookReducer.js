import {ADD_BOOK, REMOVE_BOOK} from '../actions/actionTypes'

let initState = {
    books: []
}

let idx;

let bookReducer = (state =initState, action) => {

    switch (action.type) {
    
        case ADD_BOOK:
            return {
                ...state,
                books: [...state.books, action.book]
            };

        case REMOVE_BOOK:
            idx = state.books.findIndex(book => book.id === action.id);
            return {
                ...state,
                books: [...state.books.slice(0, idx), ...state.books.slice(idx + 1)]
            };

        default:
          return state
    
    }
}

export default bookReducer