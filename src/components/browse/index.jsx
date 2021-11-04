import './styles.css';
import { NavLink } from "react-router-dom";
import { NavigationElement } from "./navigation-item";


export const Browse = (props) => {
    const navElements = [
        {bodyText: "Home", linkPath: "#", isCurrent:true},
        {bodyText: "TV Shows", linkPath: "", isCurrent:false},
        {bodyText: "Movies", linkPath: "", isCurrent:false},
        {bodyText: "New & Popular", linkPath: "", isCurrent:false},
        {bodyText: "My List", linkPath: "", isCurrent:false}
    ]
    
    return(
        
        // This div is just here to make react happy
        <div>

        
            <div className="pinning-header">
                <div className="pinning-header-container">
                    <div className="main-header has-billboard menu-navigation">
                        <NavLink className="logo icon-logoUpdate" to="/browse"></NavLink>
                        <ul className="tabbed-primary-navigation">
                            {/* Create navigation elements for the header. */}
                            {navElements.map((elem) => <NavigationElement bodyText={elem.bodyText} linkPath={elem.linkPath} isCurrent={elem.isCurrent}/>)}
                        </ul>

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
                    </div>
                </div>
            </div>

            <div id="main-view" className="mainView" role="main">
                <div className="lolomo is-fullbleed">
                    <h1 className="visually-hidden">Netflix Home</h1>
                    <span className="volatile-billboard-animations-container">
                        <div className="billboard-row">
                            <div className="billboard billboard-pane billboard-originals trailer-billboard">
                                <div className="billboard-motion dismiss-mask">
                                    <div className="motion-background-component bottom-layer full-screen">
                                        <div className="hero-image-wrapper">
                                            <img src="https://oc2-0-953-1001.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABb0tOjzAmWO2w5BLiK7pfUIe-7F2JPTv9LC4gxAAGhSWCyWWhglqKqa3pggSXjSY7NDnpRGweoc2c3EnC8DSvgq1tLaM.jpg?r=578" alt="" className="hero static-image image-layer" />
                                            <div className="trailer-vignette vignette-layer"></div>
                                            <div className="hero-vignette vignette-layer"></div>
                                        </div>

                                        <div className="embedded-components button-layer">
                                            <span className="action-buttons">
                                                <button className="color-supplementary hasIcon round ltr-1knzl35">
                                                    <div className="ltr-1ksxkn9">
                                                        <div className="small ltr-18dhnor">
                                                            <svg viewBox='0 0 24 24'>
                                                                <path d="M20 12.35l1.919-1.371 1.162 1.627-4.08 2.915-4.082-2.915 1.162-1.627L18 12.349V12c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.93 0 3.68-.79 4.94-2.06l1.42 1.42A8.954 8.954 0 0 1 11 21a9 9 0 1 1 9-9v.35z" fill="currentColor"></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </button>
                                            </span>
                                            <span className="maturity-rating">
                                                <span className="maturity-number">TV-MA</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="fill-container">
                                    <div className="info meta-layer">
                                        <div className="logo-and-text meta-layer">
                                            <div className="titleWrapper">
                                                <div className="billboard-title">
                                                    <img src="https://oc2-0-953-1001.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABZzLyvQiMUG-mSRICow0LQu2iASrHfbQ7Rdm44Htv_vbmUibLkkLySbQ034Iht088pbLDxFhoJbPJRbdKvgnvq-exPhgBpqTRvRb21uy7iCg5D3egrgr4YeKLx0Yqy7BTytBPnb3h-3Znw80Ggt7JuBEuA9YnfAb-7XZx6Xe3696Wg.png?r=084" alt="" className="title-logo" />
                                                </div>
                                            </div>
                                            <div className="info-wrapper">
                                                <div className="info-wrapper-fade">
                                                    <div className="synopsis-fade-container">
                                                        <div className="synopsis">
                                                            In this prequel to "Army of the Dead," a mysterious woman recruits bank teller Dieter to help her crew crack three legendary safes across Europe.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="billboard-links button-layer forward-leaning">
                                                <a data-uia="play-button" role="link" aria-label="Play" class=" playLink isToolkit" href="#">
                                                    <button class="color-primary hasLabel hasIcon ltr-v8pdkb" tabindex="-1" type="button">
                                                        <div class="ltr-1ksxkn9">
                                                            <div class="medium ltr-18dhnor" role="presentation">
                                                                <svg viewBox="0 0 24 24"><path d="M6 4l15 8-15 8z" fill="currentColor">
                                                                    </path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div class="ltr-1i33xgl" style={{width: "1rem"}}></div>
                                                        <span class="ltr-zd4xih">Play</span>
                                                    </button>
                                                </a>

                                                <button class="color-secondary hasLabel hasIcon ltr-v8pdkb" data-uia="billboard-more-info" type="button"><div class="ltr-1ksxkn9"><div class="medium ltr-18dhnor" role="presentation"><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-2 0a8 8 0 0 0-8-8 8 8 0 0 0-8 8 8 8 0 0 0 8 8 8 8 0 0 0 8-8zm-9 6v-7h2v7h-2zm1-8.75a1.21 1.21 0 0 1-.877-.364A1.188 1.188 0 0 1 10.75 8c0-.348.123-.644.372-.886.247-.242.54-.364.878-.364.337 0 .63.122.877.364.248.242.373.538.373.886s-.124.644-.373.886A1.21 1.21 0 0 1 12 9.25z" fill="currentColor"></path><svg viewBox="0 0 24 24"><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-2 0a8 8 0 0 0-8-8 8 8 0 0 0-8 8 8 8 0 0 0 8 8 8 8 0 0 0 8-8zm-9 6v-7h2v7h-2zm1-8.75a1.21 1.21 0 0 1-.877-.364A1.188 1.188 0 0 1 10.75 8c0-.348.123-.644.372-.886.247-.242.54-.364.878-.364.337 0 .63.122.877.364.248.242.373.538.373.886s-.124.644-.373.886A1.21 1.21 0 0 1 12 9.25z" fill="currentColor"></path></svg></div></div><div class="ltr-1i33xgl" style={{width: "1rem"}}></div><span class="ltr-zd4xih">More Info</span></button>

                                                {/* <button className="color-secondary hasLabel hasIcon ltr-v8pdkb" type='button'>
                                                    <div className="ltr-1ksxkn9">
                                                        <div className="medium ltr-18dhnor" role="presentation">
                                                            <svg viewBox='0 0 24 24'>
                                                                <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-2 0a8 8 0 0 0-8-8 8 8 0 0 0-8 8 8 8 0 0 0 8 8 8 8 0 0 0 8-8zm-9 6v-7h2v7h-2zm1-8.75a1.21 1.21 0 0 1-.877-.364A1.188 1.188 0 0 1 10.75 8c0-.348.123-.644.372-.886.247-.242.54-.364.878-.364.337 0 .63.122.877.364.248.242.373.538.373.886s-.124.644-.373.886A1.21 1.21 0 0 1 12 9.25z" fill="currentColor"></path>
                                                            </svg>
                                                        </div>
                                                        <div class="ltr-1i33xgl" style={{width: "1rem"}}></div>
                                                        <span class="ltr-zd4xih">More Info</span>
                                                    </div>
                                                </button> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </span>
                </div>
            </div>

        </div>
    )
}
