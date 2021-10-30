import homeIcon from './../assets/imgs/home.svg'
import './Nav.css'

const Nav = ({ setRenderedComponent }) => {
    return (
        <nav>
            <img src={homeIcon} className="svg" alt="home icon" 
            onClick={() => setRenderedComponent('License Form')}/>
        </nav>
    );
};

export default Nav;