import './dots.css'

const Dots=(props)=>{
    const {index, bgColor, borderColor, justifySelf, height, width,border}=props;
    return(
        <>
        <div className="dots_container" style={{justifySelf:justifySelf}}>
       <span className="dot" style={{backgroundColor:index===0?bgColor:"transparent",borderColor:borderColor, height:height, width:width,border:border}} />
       <span className="dot" style={{backgroundColor:index===1?bgColor:"transparent",borderColor:borderColor, height:height, width:width,border:border}} />
       <span className="dot" style={{backgroundColor:index===2?bgColor:"transparent",borderColor:borderColor, height:height, width:width,border:border}} />
        </div>
        </>
    )
}
export default Dots;