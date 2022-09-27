import { Box } from "@mui/material";

const Line=(props)=>{
    const{bgColor,justifySelf,alignSelf,style}=props;
    
    return(
        <>
        <Box style={style} bgcolor={bgColor} height="0.125rem" width="4.5rem" justifySelf={justifySelf} alignSelf={alignSelf}/>
        </>
    )
}
export default Line;