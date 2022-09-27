import "./header.css";
import {useState } from "react";
import Dots from "../../components/dots/Dots";
import Carousel from "../../components/carousel/Carousel";
import Button from "../../components/button/Button";
import Line from "../../components/lineBox/Line";
import logo from '../../dummyData/logo.png'
import Menu from "../../components/menu/Menu";
import {socialIcons} from '../../dummyData/Data'

const Header = (props) => {
  const {slideIndex}=props;
const [menuAccess, setMenuAccess] = useState(false);

const handleHamburger = () => {
  setMenuAccess(!menuAccess)
}

  return (
    <>
      <div className="header_container">
        <Carousel index={slideIndex} />
        <div className="top_container">
          <div className="house">
            <img src={logo} alt='logo' className="houseLogo" />
            <h3 className="logo_heading">ACC INFRA</h3>
            <h6 className="logo_heading"> Let your dream be our project</h6>
            </div>
          <Menu className="menu" handleHamburger={handleHamburger} access={menuAccess} />
          <div className="head_text_container">
            <div className="heading_box">
            <h1 className="header_heading">CONSTRUCTING</h1>
            <h1 className="header_heading">LAVISH VILLAS & DUPLEXES</h1>
            </div>
            <Line bgColor="white" justifySelf="center" alignSelf="center"  />
            <div className="heading_box">
            <h3 className="header_subheading" >WE LISTEN TO YOUR NEEDS</h3>
            <h3 className="header_subheading">DESIGN IT TO YOUR SPECIFICATIONS AND BUILD IT TO YOUR DREAMS</h3>
            </div>
            <Button style={{alignSelf: "center",justifySelf: "center"}} content="DISCOVER MORE" background="white" color="#2d3f54" />
          </div>
        <Dots index={slideIndex} bgColor="white" borderColor="white" height="14px" width= "14px" border="2px white solid" />
         {menuAccess===false &&
         <>
            <div className="header_social_icons" />
          <div className="social_box">
            {socialIcons.map((item)=>(
              <div className="social_icon" key={item.id}>{<item.icon />}</div>
              ))}
             </div>
              </>
            }
            </div>
       </div>
    </>
  );
};
export default Header;
