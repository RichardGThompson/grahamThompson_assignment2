
import { NavLink } from "react-router-dom";
import { Header } from "./header";
import { UserProfile } from "./userProfile";

export const LandingPage = () => {
    
    const placeHolderProfiles = [
        {
            name: "Graham",
            imageURL: "placeholder-avatar.jpg"
        },
        {
            name: "John",
            imageURL: "placeholder-avatar.jpg"
        }
    ];
    
    return(
        <div>
            <Header/>

            <div className="profiles-gate-container">
                <div className="centered-div list-profiles-container">
                    <div className="list-profiles">
                        <h1 className="profile-gate-label">Who's watching?</h1>
                        <ul className="choose-profile">
                            {placeHolderProfiles.map((profile) => <UserProfile profileName={profile.name} profileImageURL={profile.imageURL}/>)}
                            
                        </ul>
                    </div>
                    <span>
                        <a href="" className="profile-button">Manage Profiles</a>
                    </span>
                </div>
            </div>
        </div>
        
    )
}