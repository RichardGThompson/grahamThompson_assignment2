import PropTypes from "prop-types";

// TODO Sort out the hover.
export const UserProfile = (props) => {
    return(
        <li className="profile">
            <div>
                <a href="#" className="profile-link" tabIndex="0">
                    <div className="avatar-wrapper">
                        <div className="profile-icon" style={{ backgroundImage: `url(/images/${props.profileImageURL})` }}></div>
                    </div>
                </a>
                <span className="profile-name">{props.profileName}</span>
            </div>
        </li>
    );
}

UserProfile.propTypes = {
    profileName: PropTypes.string.isRequired,
    profileImageURL: PropTypes.string.isRequired
}

UserProfile.defaultProps = {
    profileName: "",
    profileImageURL: "placeholder-avatar.jpg"
}