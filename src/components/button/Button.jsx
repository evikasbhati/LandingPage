import { Box } from '@mui/material';
import './button.css'

const Button=(props)=>{
    const {background,width,height,color,content,style}=props;

    return(
        <>
        <Box className='button' style={style} bgcolor={background} width={width} height={height} color={color}  >
           <h4 color='gray'>
            {content}
            </h4> 
           </Box>
        </>
    )
}
export default Button;