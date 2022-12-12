import {Link} from 'react-router-dom';

const Menu = () =>{

    return(
        <div className="pageHeader">
               <h1><Link to="/">Premier Claims</Link></h1>
                <ul className="menuNav">
                    <li><Link to="/">Main Menu</Link></li>
                    <li><Link to="/add">New Claim</Link></li>
                    <li><Link to="/find">Search Claims</Link></li>
                    <li><Link to="/open">Open Claims</Link></li>
                    <li><Link to="/archive">Archive</Link></li>
                    <li><Link to="/">Log Out</Link></li>
                </ul>

        </div>
    );
}

export default Menu;