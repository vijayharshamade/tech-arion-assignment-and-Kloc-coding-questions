import './index.css'
import { Link } from "react-router-dom"

const Header = () => (
    <>
        <ul className='header-ul'>
            <Link to="/" className='link-decor'>
                <li className='header-li'>
                    Counter
                </li>
            </Link>

            <Link to="/displayview" className='link-decor'>
                <li className='header-li'>
                    DisplayGrid
                </li>
            </Link>

            <Link to="/loginform" className='link-decor'>
                <li className='header-li'>
                    LoginForm
                </li>
            </Link>

            <Link to="/reactpopup" className='link-decor'>
                <li className='header-li'>
                    React Popup
                </li>
            </Link>

            <Link to="/table" className='link-decor'>
                <li className='header-li'>
                    Table
                </li>
            </Link>

        </ul>
    </>
)

export default Header