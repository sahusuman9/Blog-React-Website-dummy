import './sideBar.css'
import {SImg} from '../../index.js'

export default function SideBar() {
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
          <span className="sidebarTitle">ABOUT ME</span>
          <img className='sidebarImg' src={SImg} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates cumque repellendus aliquam illo quam fugit placeat nostrum dicta consequatur.</p>
        </div>

        <div className="sidebarItem">
          <span className="sidebarTitle">CATEGORIES</span>
          <ul className="sidebarList">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Sport</li>
            <li className="sidebarListItem">Tech</li>
            <li className="sidebarListItem">Cinema</li>
          </ul>
        </div>

        <div className="sidebarItem">
          <span className="sidebarTitle">FOLLOW US</span>
          <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-facebook-f"></i>
        <i className="sidebarIcon fa-brands fa-twitter"></i>
        <i className="sidebarIcon fa-brands fa-pinterest"></i>
        <i className="sidebarIcon fa-brands fa-instagram"></i>
          </div>
        </div>

    </div>
  );
} 
