import React from "react";
import { Provider } from "react-redux";
import store from "./Redux/store";
import UserList from "./Components/UserList";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserList />
      </div>
    </Provider>
  );
}
export default App;
