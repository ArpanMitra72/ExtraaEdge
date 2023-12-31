// import { createStore } from "redux";
// import reducer from "./reducers";

// const store = createStore(reducer);

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers";

const store = configureStore({
  reducer,
});

export default store;
