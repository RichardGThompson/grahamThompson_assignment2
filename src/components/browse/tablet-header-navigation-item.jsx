import propTypes from "prop-types";
import { NavLink } from "react-router-dom";

export const TabletHeaderNavigationItem = (props) => {
    return(
        <li className="sub-menu-item">
            <NavLink className={(props.isActive) ? "current active" : ""} to="#">{props.elementText}</NavLink>
        </li>
    );
}

TabletHeaderNavigationItem.propTypes = {
    elementText: propTypes.string.isRequired,
    isActive: propTypes.bool.isRequired
}

TabletHeaderNavigationItem.defaultProps = {
    elementText: "",
    isActive: false
}