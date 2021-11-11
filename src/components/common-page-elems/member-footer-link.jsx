import PropTypes from "prop-types";
import "./styles.css";

export const MemberFooterLink = (props) => {
    return(
        <li className="member-footer-link-wrapper">
            <a href={props.linkUrl} className="member-footer-link">
                <span className="member-footer-link-content">{props.linkText}</span>
            </a> 
        </li>
        
    )
}

MemberFooterLink.propTypes = {
    linkUrl: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired
}

MemberFooterLink.defaultProps = {
    linkUrl: "#",
    linkText: ""
}