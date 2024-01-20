// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import videoBg from "./assets/X2_Baloons.mp4";
import ButtomBar from "./components/buttom_bar";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="h-screen ">
      <video
        className="h-[100%] w-[100%] object-cover"
        src={videoBg}
        autoPlay
        loop
        muted
      ></video>
      <Navbar />
      <div className="m-10">
        <ButtomBar />
      </div>
    </div>
  );
}

export default App;
