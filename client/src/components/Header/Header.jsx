import "./header.css";
import { HImg } from "../../index.js";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitle">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img className="headerImg" src={HImg} alt="" />
    </div>
  );
}
