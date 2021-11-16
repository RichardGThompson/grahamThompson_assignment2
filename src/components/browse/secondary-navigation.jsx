export const SecondaryNavigation = () => {
    return(
        <div className="secondary-navigation">
            <div className="nav-element">
                <div className="searchBox">
                    <button className="searchTab" tabIndex="0">
                        <span className="icon-search"></span>
                    </button>
                </div>
            </div>

            <div className="nav-element">
                <span className="notifications">
                    <button className="notifications-menu">
                        <span className="icon-button-notification"></span>
                    </button>
                </span>
            </div>

            <div className="nav-element">
                <div className="account-menu-item">
                    <div className="account-dropdown-button">
                        <a href="#">
                            <span className="profile-link" role="presentation">
                                <img src={`/images/avatar001.png`} alt="" className="profile-icon" />
                            </span>
                        </a>
                        <span className="caret" role="presentation"></span>
                    </div>
                </div>
            </div>

        </div>
    );
}