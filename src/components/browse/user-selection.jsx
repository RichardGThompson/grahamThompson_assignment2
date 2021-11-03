
export const UserSelection = () => {
    return(
        <div className="account-menu-item">
            <div className="account-dropdown-button">
                <a href="">
                    <span className="profile-link" role="presentation">
                        <img src={`/images/avatar001.png`} alt="" className="profile-icon" />
                    </span>
                </a>
                <span className="caret" role="presentation"></span>
            </div>
        </div>
    )
}