import { FETCHCHARS, SUCCESS, FAILURE } from  "../actions";


const initialState = {
  characters: [],
  isFetching: false,
  error: 'patience padawan'
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHCHARS:
      return {
        ...state,
        isFetching:true,
        error:""
      }
    case SUCCESS:
      return {
        ...state,
        isFetching:false,
        error:""
      }
    case FAILURE:
      return {
        ...state,
        isFetching:false,
        error:"No Character, there is"
      }
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
