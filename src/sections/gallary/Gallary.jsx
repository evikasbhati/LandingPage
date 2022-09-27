import './gallary.css'
import Dots from '../../components/dots/Dots'
import Line from '../../components/lineBox/Line'
import { slide1, slide2, slide3 } from "../../dummyData/Data";
import sofa from '../../dummyData/sofaImg.png'

const ImagesBox=(props)=>{
    const {data}=props;

    return(
        <>
        <div className="image_box">
            {data.map((item)=>(
                <div key={item.id} className={item.id} style={{overflow: "hidden"}}>
                    <img className='gallary_img' src={item.img} alt="" />
                </div>
                ))}
        </div>
        </>
    )
}

const Gallary=(props)=>{
  const {slideIndex}=props;

  return(
        <>
        <div className="gallary_container">
            <div className="gallary_text_box" >
                <h4 className="gallary_heading">BEAUTIFUL SHOT</h4>
                <h1 className="gallary_subHeading">VIEW OUR GALLARY</h1>
                <Line bgColor="skyBlue" alignSelf="flex-start" justifySelf="flex-start" style={{marginTop:"1rem"}} />
                <p className='gallary_paragraph'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut ipsum assumenda corporis adipisci omnis, nobis sed deleniti ducimus sequi hic labore. accusantium deserunt sunt perspiciatis earum voluptatem?</p>
                <Dots index={slideIndex} bgColor="black"  border="1px black solid" justifySelf="flex-start" height="10px" width= "10px" />
            </div>
            {slideIndex===0 &&<ImagesBox data={slide1} />}
            {slideIndex===1 &&<ImagesBox data={slide2} />}
            {slideIndex===2 &&<ImagesBox data={slide3} />}
        </div>
        <img className='footer_img' src={sofa} alt="" />
        </>
    )
}
export default Gallary