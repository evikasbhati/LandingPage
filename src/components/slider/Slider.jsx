import "./slider.css";
import {  useState } from "react";
import { slide1, slide2, slide3 } from "../../dummyData/Data";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Slide = (props) => {
  const { data } = props;
  return (
    <>
      {data.map((item) => (
        <div key={item.id} className="slide">
          <img className="img_slide" src={item.img} alt="" />
          <h3>{item.address}</h3>
        </div>
      ))}
    </>
  );
};

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleArrowButton = (value) => {
    if(value===1){
        slideIndex<2?setSlideIndex(slideIndex + 1):setSlideIndex(0);
    } 
    else{
        slideIndex>0? setSlideIndex(slideIndex - 1):setSlideIndex(2);
    } 
  };

  return (
    <>
      <div className="slide_container">
        <button className="arrow_button" onClick={()=>handleArrowButton(-1)}>
          <ArrowBackIosIcon />
        </button>
        {slideIndex === 0 && (
          <div className="slide1">
            <Slide data={slide1} />
          </div>
        )}
        {slideIndex === 1 && (
          <div className="slide1">
            <Slide data={slide2} />
          </div>
        )}
        {slideIndex === 2 && (
          <div className="slide1">
            <Slide data={slide3} />
          </div>
        )}
        <button className="arrow_button" onClick={()=>handleArrowButton(1)}>
          <ArrowForwardIosIcon />
        </button>
      </div>
    </>
  );
};
export default Slider;
