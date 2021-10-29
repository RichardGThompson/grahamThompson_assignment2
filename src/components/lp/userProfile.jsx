import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";


export const UserProfile = (props) => {
    return(
        <li className="profile">
            <div>
                <NavLink to="/browse">
                    <div className="avatar-wrapper">
                        <div className="profile-icon" style={{ backgroundImage: `url(/images/${props.profileImageURL})` }}></div>
                    </div>
                    <span className="profile-name">{props.profileName}</span>
                </NavLink>
                
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