import PropTypes from "prop-types";

export const SocialLink = (props) => {
    return(
        <a href={props.linkUrl} className="social-link">
            <svg class="svg-icon" focusable="true" viewBox={props.viewBox}>
                <path d={props.socialSvgPath}></path>
            </svg>
        </a>
    );
}

SocialLink.propTypes = {
    linkUrl: PropTypes.string.isRequired,
    socialSvgPath: PropTypes.string.isRequired,
    viewBox: PropTypes.string.isRequired
}

SocialLink.defaultProps = {
    linkUrl: "#",
    socialSvgPath: "",
    viewBox: "0 0 612 612"
}