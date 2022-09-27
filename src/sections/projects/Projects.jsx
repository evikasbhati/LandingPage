import './projects.css'
import Slider from '../../components/slider/Slider'
import Button from '../../components/button/Button'

const Project=(props)=>{
    const {heading, subHeading, backgroundPositon}=props;

    return(
        <>
        <div className="project">
            <h4 className='project_heading'>{heading}</h4>
            <h1 className='project_subHeading'>{subHeading}</h1>
            <p className='project_paragraph'>It is long established fact that a reader will be distracted by the readable content of page when looking at its layout. The point Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quas rem tenetur voluptatibus aut. Reprehenderit iste vitae aspernatur.</p>
        <Slider />
        <div className="sketch_background" style={{backgroundPositionX: backgroundPositon}} />
        </div>
        </>
    )
}

const Projects=()=>{
    return(
        <>
        <div className="project_container">
            <Project heading="HOW WE DO" subHeading="COMPLETED PROJECTS" backgroundPositon="left" />
            <div className="appointment">
                <div className="appointment_box">
            <h4 className='appointment_heading'>MAKE AN APPOINTMNET NOW!</h4>
            <h1 className='appointment_subHeading'>+91 123 456 7890</h1>
                </div>
            <Button  style={{alignSelf: "center",justifySelf: "center",gridRow:"-3/-1"}} content="MAKE AN APPOINTMNET" background="white" color="#2d3f54" />
            </div>
            <Project heading="WHAT'S NEW!" subHeading="UPCOMING PROJECTS" backgroundPositon="right" />
        </div>
        </>
    )
}
export default Projects;