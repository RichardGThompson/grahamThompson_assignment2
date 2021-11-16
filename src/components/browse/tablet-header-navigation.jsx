import propTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { TabletHeaderNavigationItem } from "./tablet-header-navigation-item";

export const TabletHeaderNavigation = (props) => {
    const toggleMenu = (menuId) => {
        let menuElem = document.querySelector(`#${menuId}`);
        // Toggle the state of the menu element.
        if(menuElem.classList.contains("active")){
            menuElem.classList.remove("active");
        }
        else{
            menuElem.classList.add("active");
        }
    }
    
    return(
        <li className="navigation-menu">
            {/* Tablet: Browse dropdown link */}
            <a role="button" className="menu-trigger" onClick={() => toggleMenu("tabletMenu")}>Browse</a>
            <div id="tabletMenu" className="sub-menu theme-lakira">
                <div className="callout-arrow"></div>
                <div className="topbar"></div>
                <ul className="sub-menu-list">
                    {props.navigationElements.map((element) => <TabletHeaderNavigationItem elementText={element.bodyText} isActive={element.isCurrent}/>)}
                    
                    <li className="sub-menu-item">
                        <NavLink to="#">TV Shows</NavLink>
                    </li>
                </ul>
            </div>
        </li>
    );
}

TabletHeaderNavigation.propTypes = {
    navigationElements: propTypes.array.isRequired
}

TabletHeaderNavigation.defaultProps = {
    navigationElements: ""
}