import '../assets/css/header.css';
import logo from '../assets/img/logo.png';

function Header() {
    return(
        <nav class="navbar navbar-dark bg-primary">
            <div className="container">
                <div className="row w-100">
                    <div className="col-md-3">
                        <a className="logo">
                            <img src={logo} />
                        </a>
                    </div>
                    <div className="col-md-9">
                        <ul>
                            <li>
                                <a>Home</a>
                            </li>
                            <li>
                                <a>About</a>
                            </li>
                            <li>
                                <a>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;