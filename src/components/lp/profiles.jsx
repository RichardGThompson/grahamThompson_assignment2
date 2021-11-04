import PropTypes from "prop-types";
import { UserProfile } from "./userProfile";

/**
 * Summary. Generates the user profiles screen on the landing page of the website.
 * 
 * @param {PropTypes} props The list of user profiles in an array.
 * @returns HTML for the profiles container.
 */
export const ProfilesContainer = (props) => {
    return(
        <div className="profiles-gate-container">
            <div className="centered-div list-profiles-container">
                <div className="list-profiles">
                    <h1 className="profile-gate-label">Who's watching?</h1>
                    <ul className="choose-profile">
                        {props.profiles.map((profile) => <UserProfile key={profile.uuid} profileUUID={profile.uuid} profileName={profile.name} profileImageURL={profile.imageURL}/>)}
                    </ul>
                </div>
                <span>
                    <a href="" className="profile-button">Manage Profiles</a>
                </span>
            </div>
        </div>
    );
}

ProfilesContainer.propTypes = {
    profiles: PropTypes.array.isRequired
}

ProfilesContainer.defaultProps = {
    profiles: []
}