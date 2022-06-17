import './App.css';
import image from "./walpaper.jpg";
import { AiFillFacebook } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

function App() {
  return (
    <div className='App'>
      <div className='div'>Hello Armenia</div>
      <img src={image} />
      <div className='icon'>
        <a href='#' ><AiFillFacebook /></a>
        <a href='#' ><BsTelegram /></a>
        <a href='#' ><AiFillInstagram /></a>
        <a href='#' > <AiFillLinkedin /></a>
      </div>
    </div>
  );
}

export default App;
