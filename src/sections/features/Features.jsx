import './features.css'
import housePlan from '../../dummyData/housePlan.png'
import Line from '../../components/lineBox/Line'
import { featuresData } from '../../dummyData/Data'

const Features=()=>{
    
    return(
        <>
        <div className="feature_container">
            <h4 className='features_heading'>OVER GREAT</h4>
            <h1 className="features_subHeading">SOME FEATURES</h1>
            <div className="feature_left_container">
                <img className='featuresImg' src={housePlan} alt="" />
                <Line bgColor="skyBlue" alignSelf="flex-start" justifySelf="center"  style={{marginTop:"0.5rem",marginRight:"4rem"}} />
                <p className='feature_left_paragraph'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident deleniti itaque delectus maiores. Magnam pariatur optio iusto ab Voluptatibus, corporis enim. amet consectetur adipisicing elit. Provident deleniti</p>
            </div>
            <div className="feature_right_container">
                {featuresData.map((item)=>(
                    <div key={item.id} className="features_grid">
                    <item.icon style={{width: '3rem',height: '4rem',justifySelf:"center"}}  />
                    <h4 className='feature_grid_heading'>{item.label}</h4>
                    <p className='feature_pargraph'>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}
export default Features