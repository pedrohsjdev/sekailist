import SearchBar from '../SearchBar'
import Logo from '../../assets/images/logo.png'
import {ReactComponent as Profile} from '../../assets/svg/user.svg';
import "./style.css"

function NavBar() {
    return (
        <nav>
            <div className='logo'>
                <img src={Logo}></img>
                <h1>SekaiList</h1>
            </div>
            <div>
                <SearchBar />
            </div>
            <div className='menu'>
                <ul>
                    <li><a href="#">Animes</a></li>
                    <li><a href="#">Mangás</a></li>
                    <li><a href="#"><Profile/></a></li>
                </ul>
            </div>
        </nav>
    )
}
export default NavBar