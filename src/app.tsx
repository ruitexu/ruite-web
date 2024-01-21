import { Suspense } from "react";
import Footer from "./components/footer/footer";
import Profile from "./components/profile/profile";
import "./styles/app.scss";
import React  from 'react';

const App = () => {
  return (
    <Suspense fallback="loading">
      <div className="app">
        <Profile />
        <Footer />
      </div>
    </Suspense>
  );
};


export default App;
