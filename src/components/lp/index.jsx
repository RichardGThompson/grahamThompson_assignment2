
import { useContext } from "react";
import { UsersContext } from "../../context/users-context";
import { Header } from "./header";
import { ProfilesContainer } from "./profiles";

export const LandingPage = () => {

    const userContext = useContext(UsersContext);
    
    return(
        <div>
            <Header/>
            <ProfilesContainer profiles={userContext.users}/>
        </div>
        
    )
}