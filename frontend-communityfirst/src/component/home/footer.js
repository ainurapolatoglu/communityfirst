import React from "react";
import { Link } from "react-router-dom";
import './footer.css';
import { render } from "react-dom";
//import './component/home/Home.css';

class Footer extends React.Component {
    render() {
        return (
            <div>
                <footer>
                    <ul className="navigation-list-footer">
                        <li className="navigation-item-footer" > <Link className="navigation-item-footer-btn" to="/communityfirst" >Home</Link></li>
                        <li className="navigation-item-footer">|</li>
                        <li className="navigation-item-footer" ><Link className="navigation-item-footer-btn" to="/communityfirst" >Contact</Link></li>
                    </ul>
                    <ul className="navigation-item-footer">@Copyright 2020 CommunityFirst. All right Reserved</ul>
                </footer>
            </div>
        );
    }
}
export default Footer;






