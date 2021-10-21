import { NavLink } from "react-router-dom";

export const Header = () => {
    return (
        <div className="pinning-header">
            <div className="pinning-header-container">
                <div className="main-header" role="navigation">
                    <NavLink className="logo icon-logoUpdate" to="/browse"></NavLink>
                </div>
            </div>
        </div>
    );
}