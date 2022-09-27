import './menu.css'
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';

const Menu = (props) => {
    const {handleHamburger, access}=props;

    return (
        <div>
            <div className='hamburger' onClick={handleHamburger} >
                {!access && <MenuIcon sx={{ fontSize: 40,color:"white" }} /> }
                {access && <CloseIcon sx={{ fontSize: 40,color:"white" }}/>}
            </div>
            {access &&
                <div className='barContainer'>
                    <div className='menuItemsContainer'>
                        <div className='menuItem'>Home</div>
                        <div className='menuItem'>About Us</div>
                        <div className='menuItem'>Projects +</div>
                        <div className='menuItem'>Upcoming Projects</div>
                        <div className='menuItem'>Completed Projects</div>
                        <div className='menuItem'>Services</div>
                        <div className='menuItem'>Photo Gallery</div>
                        <div className='menuItem'>Contact Us</div>
                    </div>
                </div>}
        </div>
    )
}

export default Menu