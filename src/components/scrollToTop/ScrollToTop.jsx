import styled from 'styled-components';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Button = styled.div`
        position: absolute;
        width:4rem;
        height:4rem;
        background-color:  #47acd1;
        color: white;
        bottom: 0;
        right:0;
        display:flex;
        justify-content: center;
        align-items: center;
        margin: 0px 20px 0px auto;
        font-size: 2rem;
        cursor: pointer;
        `;

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
    
const ScrollToTopBtn = () => {
    return (
        <Button onClick={scrollToTop}>
            <KeyboardArrowUpIcon />
        </Button>
    );
}

export default ScrollToTopBtn;