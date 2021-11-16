import propTypes from "prop-types";
import { NavLink } from "react-router-dom";

export const NavigationElement = (props) => {    
    return(
        <li className="navigation-tab">
            <NavLink className={props.isCurrent ? "current active desktop-nav-elem" : "desktop-nav-elem"} to={props.linkPath}>{props.bodyText}</NavLink>
        </li>
    );
}

NavigationElement.propTypes = {
    bodyText: propTypes.string.isRequired,
    linkPath: propTypes.string.isRequired,
    isCurrent: propTypes.bool.isRequired
}

NavigationElement.defaultProps = {
    bodyText: "",
    linkPath: "",
    isCurrent: false
}