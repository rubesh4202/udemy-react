
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';



function Header(){
    return(
        <div className="container">

        <div className="header1">
            <h1 className="header1__title">Udemy</h1>
        </div>

        <div className="header2">
            <i class="fa-solid fa-magnifying-glass" style={{color: "white;"}}></i>
            <input type="text" placeholder="Search for anything Tech, Finance, Art etc..."/>
        </div>

        <div className="header3">
            <p className="header3__subscription">Subscribe</p>
            <div className="mylearning">
                <p className="header3__learning">My Learning</p>
                <div className="notification">
                    <p className="mylearning__notification">You haven't purchased anything yet</p>
                </div>
            </div>
            <FontAwesomeIcon icon={faCartShopping} style={{color: "#A435F0;"}}/>
            <i class="fa-solid fa-bell" style={{color: "#A435F0;"}}></i>
            <i class="fa-solid fa-user" style={{color: "#A435F0;"}}></i>
        </div>

        <div className="header4">
            <i class="fa-solid fa-bars" style={{color: "#A435F0;"}}></i>
        </div>

    </div>
    );
}

export default Header;