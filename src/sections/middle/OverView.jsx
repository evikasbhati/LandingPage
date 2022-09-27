import Button from '../../components/button/Button';
import Line from '../../components/lineBox/Line';
import './overView.css'

const OverView=()=>{
    return(
        <>
            <div className="overView_Container">
            <h3 className='overView_heading'>WELCOME HOME</h3>
            <h1 className='overView_subHeading'>ABOUT OVERVIEW</h1>
            <div className="line_content">
            <Line bgColor="skyBlue" alignSelf="flex-start" justifySelf="center" style={{marginTop:"1rem"}} />
            <div className="paragraph_box">
            <p className='paragraph'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut ipsum assumenda corporis adipisci omnis, nobis sed deleniti ducimus sequi hic labore. Id voluptates debitis accusantium deserunt,omnis, nobis sed deleniti ducimus sequi hic labore. Id voluptates debitis accusantium deserunt sunt perspiciatis earum voluptatem?</p>
            </div>
            </div>
            <Button style={{alignSelf: "flex-start",justifySelf: "flex-start",marginLeft:"8.2rem"}} content="READ MORE" background="#2b4055" color="white" />
          <img className='overViewImg' src="https://images.unsplash.com/photo-1565182999561-18d7dc61c393?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
          </div>
          <div className="spaces_container">
            <div className="living_space_box">
                <h3 className='spaces_heading' >AAC INFRA</h3>
                <h1 className='spaces_subHeading' >LIVING SPACES</h1>
                <Line  bgColor="white" alignSelf="flex-start" justifySelf="flex-start" />
                <h3 className='spaceMiddle_heading'>Are you interested to Homepark</h3>
                <p className='space_paragraph'>The sun collectors, shall provide the electricity of the social areas of the site and shall do its part for protecting the enviroment.</p>
                <Button style={{alignSelf: "flex-start",justifySelf: "flex-start"}} content="SHEDULE A VISIT" background="white" color="#2d3f54" />
            </div>
          </div>
        </>
    )
}
export default OverView;