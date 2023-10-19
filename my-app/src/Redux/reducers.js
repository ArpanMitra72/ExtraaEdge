// const initialState = {
//   userList: [],
//   loading: true,
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "SET_USER_LIST":
//       return {
//         ...state,
//         userList: action.payload,
//       };
//     case "SET_LOADING":
//       return {
//         ...state,
//         loading: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export default reducer;

// reducer.js
const initialState = {
  userList: [],
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_LIST":
      return {
        ...state,
        userList: action.payload,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
