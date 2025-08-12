import logo2 from './little_lemon_logo.png';
import display from "./images/waiter.jpg"
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <div className='heading'>
                <img src={logo2} alt="Little Lemon Logo" className="header-logo" />
                <h1 className="header-title">Little Lemon</h1>
            </div>
            <img src={display} alt="waiter" className='display'/>
            <p className="header-subtitle">With a captivating blend of Mediterranean cuisine, dramatic presentations, an extensive wine selection, and show-stopping cocktails, we invite you to indulge in a symphony of flavors that will leave you craving more. At Little Lemon, we believe that great things come in small packages.</p>
            <Link to="/order-online" className="header-button">
                Reserve a Table
            </Link>

        </div>
    );
}
export default Header;