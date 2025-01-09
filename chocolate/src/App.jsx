 
import './App.css';
import React from "react";
import { MyProvider } from "./context";
import { BrowserRouter } from "react-router-dom";
import { CreateStore } from "./store"; // ודא ששם הקובץ נכון
import MyApp from "./components/MyApp";

function App() {
  const store = CreateStore(); // כאן אנו יוצרים את ה-store

  return (
    <MyProvider value={store}>
      <BrowserRouter>
        <MyApp />
      </BrowserRouter>
    </MyProvider>
  );
}

export default App;

