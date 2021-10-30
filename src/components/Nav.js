import { Link } from 'react-router-dom';
import './Nav.css';
import homeIcon from './../assets/imgs/home.svg'

const Nav = () => {
    return (
        <nav>
            <Link to='/'>
                <img src={homeIcon} className="svg" alt="home icon" />
            </Link>
        </nav>
    );
};

export default Nav;