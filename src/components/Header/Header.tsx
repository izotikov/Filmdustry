import {FC} from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header: FC = () => {

    return (
        <div className="Header">
            <ul>
                <li><Link to='/'>Главная</Link></li>
                <li><Link to='/seen'>Просмотренное</Link></li>
                <li><Link to='/watchlist'>Буду смотреть</Link></li>
                <li id='user'><Link to='/userProfile'><img src="src/assets/user-icon.svg" alt="user logo"/></Link></li>
            </ul>
        </div>
    );
};

export default Header;