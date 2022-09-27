import {HeaderImages} from '../../dummyData/Data'
import './carousel.css'

const Carousel=(props)=>{
    const {index}=props
    return(
        <>
        <div className="carousel_container">
                <img className='sliderImage'  src={HeaderImages[index>2? 0:index].img } alt="" />
            <div className="screen" />
        </div>
        </>
    )
}
export default Carousel