
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UsersContext } from "../../context/users-context";
import { Header } from "./header";
import { ProfilesContainer } from "./profiles";
import { UserProfile } from "./userProfile";

export const LandingPage = () => {
    
    // const placeHolderProfiles = [
    //     {
    //         name: "Graham",
    //         imageURL: "avatar001.png"
    //     },
    //     {
    //         name: "Morgan",
    //         imageURL: "avatar002.png"
    //     }
    // ];

    const userContext = useContext(UsersContext);
    
    return(
        <div>
            <Header/>
            <ProfilesContainer profiles={userContext.users}/>
        </div>
        
    )
}