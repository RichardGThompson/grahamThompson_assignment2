import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { NavigationElement } from "./navigation-item";

export const Browse = (props) => {
    const navElements = [
        {bodyText: "Home", linkPath: "#", isCurrent:true},
        {bodyText: "TV Shows", linkPath: "", isCurrent:false},
        {bodyText: "Movies", linkPath: "", isCurrent:false},
        {bodyText: "New & Popular", linkPath: "", isCurrent:false},
        {bodyText: "My List", linkPath: "", isCurrent:false}
    ]
    
    return(
        <div className="pinning-header">
            <div className="pinning-header-container">
                <div className="main-header has-billboard menu-navigation">
                    <NavLink className="logo icon-logoUpdate" to="/browse"></NavLink>
                    <ul className="tabbed-primary-navigation">
                        {navElements.map((elem) => <NavigationElement bodyText={elem.bodyText} linkPath={elem.linkPath} isCurrent={elem.isCurrent}/>)}
                    </ul>

                    <div className="secondary-navigation">
                        <div className="nav-element">
                            <div className="searchBox">
                                <button className="searchTab" tabIndex="0">
                                    <span className="icon-search"></span>
                                </button>
                            </div>
                        </div>

                        <div className="nav-element">
                            <span className="notifications">
                                <button className="notifications-menu">
                                    <span className="icon-button-notification"></span>
                                </button>
                            </span>
                        </div>

                        <div className="nav-element">
                            <div className="account-menu-item">
                                <div className="account-dropdown-menu">
                                    <a href="">
                                        <span className="profile-link" role="presentation">
                                            <img src={`url(/images/avatar001.png)`} alt="" className="profile-icon" />
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
