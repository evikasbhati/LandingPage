import "./testimonials.css";
import { Star } from "@mui/icons-material";
import MinimizeIcon from "@mui/icons-material/Minimize";

const Background = () => {
  return (
    <>
      <div className="background_container">
        <img className="background" alt=""
          src="https://images.unsplash.com/photo-1635321350281-e2a91ecffd00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2023&q=80" />
        <div className="background_screen" />
      </div>
    </>
  );
};

const Testimonials = () => {
  
  return (
    <div className="testimonials_container">
      <Background />
      <h4 className="testimonials_heading">TESTIMONIALS</h4>
      <h1 className="testimonials_subHeading">COMMENTS FROM ARE HAPPY</h1>
      <div className="stars">
        <Star style={{ color: "yellow" }} fontSize="small" />
        <Star style={{ color: "yellow" }} fontSize="small" />
        <Star style={{ color: "yellow" }} fontSize="small" />
        <Star style={{ color: "yellow" }} fontSize="small" />
        <Star style={{ color: "yellow" }} fontSize="small" />
      </div>
      <p className="testimonials_paragraph">
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
        doloremque error corrupti atque ratione, rerum eveniet maxime aut? Eum
        quod ipsa excepturi voluptate perspiciatis repudiandae? Praesentium id
        quas eveniet aliquam.atque ratione, maxime aut? Eum quod ipsa rerum
        evealiquam. "
      </p>
      <div className="testimonials_devName">
        <MinimizeIcon fontSize="small" style={{ zIndex: "3", color: "#47acd1" }} />
        <h4 className="devName">VIKAS</h4>
        <MinimizeIcon fontSize="small" style={{ zIndex: "3", color: "#47acd1" }} />
      </div>
      <h4 className="developer">Developer</h4>
      <img className="developerImg" alt=""
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
    </div>
  );
};
export default Testimonials;
