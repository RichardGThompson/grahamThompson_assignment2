
import { NavLink } from "react-router-dom";
import { Header } from "./header";
import { ProfilesContainer } from "./profiles";
import { UserProfile } from "./userProfile";

export const LandingPage = () => {
    
    const placeHolderProfiles = [
        {
            name: "Graham",
            imageURL: "avatar001.png"
        },
        {
            name: "Morgan",
            imageURL: "avatar002.png"
        }
    ];
    
    return(
        <div>
            <Header/>
            <ProfilesContainer profiles={placeHolderProfiles}/>
        </div>
        
    )
}