import './styles.css';
import { Row } from './row';
import { MemberFooter } from '../common-page-elems/member-footer';
import { BrowseHeader } from './browse-header';


export const Browse = (props) => {
    const rows = [
        {
            rowTitle: "Tv Shows",
            rowItems: [
                {
                    itemName: "Big Mouth",
                    imageUrl: "https://oc2-0-953-1001.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaNeEqzOlqssJOd2UcPq9uDNaBHppptGB8KE4KkrNQ9vCJoDsMxn-f6ro7H3TR6RAw3_48aSWU_CXqNUhRIbwK_6RY6YccBJDTpHEMjgPZG995iyI6l6zThZgHqkV_hu8WfdECo03HjJOQME4yEgPiFLsWplCaXnp9fCzjL6QJHSVPeG6tVoUfB6cCf3WFqnDMiMPXCzGOozStOnoFwAbiIz.jpg?r=aac"
                },
                {
                    itemName: "Tiger King",
                    imageUrl: "https://oc2-0-953-1001.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS2pSHUiEi7LHxEmwa0KK_j35WtY-JAPM6M937zBEFBBYn-cSe_fk8CpyjOcYyJmU9SzYWKWGI7w2lJYsGvhg9QKu9VmNPov2zpR3a8ONq-0CBNuyxq-B0YNxFys.jpg?r=d71"
                },
                {
                    itemName: "Explained",
                    imageUrl: "https://oc2-0-953-1001.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWt-SRwVHSA5FvQTYwfVh5sKDC6702oAffKUZJ-HZdbhlmXFHBLR5R9b3-NJeGEPEz57RVvy7gQcOJlpo-lkCXS11mCIe85F24vISlsa7Iksy0XhnnaniwTjL-PO4mImqqZo8dOx8i5IamhZXR4P4phjPJS5Ug.jpg?r=f6e"
                },
                {
                    itemName: "Black Mirror",
                    imageUrl: "https://oc2-0-953-1001.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQMeRlrLJszZK1PPcfBNRSlWjLN6oOCiyEcH4Gu3dHI9rDeOe1xCjm9eKBIRzB8xqb2TB1ZZtvO-4OENdyoElsqFMEfyUenyx0nx20hrhkpwiziodReUWh4bPfyq.jpg?r=743"
                },
                {
                    itemName: "Parks and Rec",
                    imageUrl: "https://oc2-0-953-1001.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdVbH4gypiIXMminj-ztFvDuCwC5Ct0uKl7t0M_55GONHKhgTvxesn7LqpwDhJR6TC82HMAzDCeKpqx3FJAR50CkeEM.jpg?r=72a"
                },
                {
                    itemName: "Community",
                    imageUrl: "https://oc2-0-953-1001.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYFU54kh9JTIFcgz63ncUvud5thoiu2ytOwzSLBEc7lKvsW0Ix_YKb9jTkK3dPTnYfvLzJKi6tGFlgjmiJ4j-h-1zr8.jpg?r=190"
                },
                {
                    itemName: "Inside Job",
                    imageUrl: "https://oc2-0-953-1001.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTa8zKZrDzt9Ib_dhDb26tjjxhH-Jopmyv-3wfbycNl-E7YUZ8-SFCayNNaXn81SacR-iD9xDfgS34rnr-Gw0YAJcON2KGgwq0eAvfUau5no8stR1zu64z23j508.jpg?r=25b"
                }
            ]
        },
        {
            rowTitle: "Horror Movies",
            rowItems: [
                {
                    itemName: "The Thing",
                    imageUrl: "https://oc2-0-953-1001.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdsPp2IE5Vy_-rHSjvfcinh5CvQ-UPOteK086hwSSHep8v7O3rmlYG0qmnQllcPWhM_HK83RepUfJZcp13w8vBKOJMM.jpg?r=813"
                },
                {
                    itemName: "Zombieland: Double Tap",
                    imageUrl: "https://oc2-0-953-1001.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABW_jGj7H-U0rUptdq-J0al_rPhWWOkjsLKD3Fkqq0piW11qwgRJUz8jBO5HP827KbpChNVeqCd49nYd51ACykdPW7x8.jpg?r=f9d"
                },
                {
                    itemName: "Beetlejuice",
                    imageUrl: "https://oc2-0-953-1001.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWytZV-d02t-XhPVPLWHMb4R6R9hFTEDTtnM4K9727H4PpPlFBRokk_zmJH4Ril8aDlPrZ3CVDx617lqe0TUUiVIfS0.jpg?r=425"
                },
                {
                    itemName: "Doctor Sleep",
                    imageUrl: "https://oc2-0-953-1001.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbV5ACP2y3aGmIT-bVWtkAb4AikqlejO58l3EUDpjlEzpCCHca28tTtubfFfkhB6gw4Xl-n1FXzbY4NQgEmPLVESXGQ.jpg?r=202"
                },
                {
                    itemName: "Halloween",
                    imageUrl: "https://oc2-0-953-1001.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU6h7sXTKzUsDoQOE9pOZn6NbQXaL67YXEPeU2AfrAiF5fBdssRfSZClr7i-g7XvhWs7BxUt1cwoVpf1K7TBMNPg6p0.jpg?r=fdb"
                },
                {
                    itemName: "Cabin in the Woods",
                    imageUrl: "https://oc2-0-953-1001.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUykss_be8Pg6UFHPCzBQN0gozE85myg2THytW9Shp8mZ8QaFTZdq0IAO1PcV-m3m7Jvwq6KvDgAm2rQg3y-aV4b3tk.jpg?r=5c4"
                },
                {
                    itemName: "Scary Movie",
                    imageUrl: "https://oc2-0-953-1001.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVqdgi2SoBc4Jz0G32MJxoKNDZmxLYK2WffmxC5yzkYi8wV2GMsNa4kldM9w6hq1XS-QplqLVeDoEnPIy776EUOq3Nw.jpg?r=3ba"
                }
            ]
        }
    ]
    
    return(
        
        // This div is just here to make react happy
        <div>
            <BrowseHeader/>

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

                    {rows.map( (row) => <Row rowTitle={row.rowTitle} rowItems={row.rowItems}/>)}

                </div>

            </div>

            <MemberFooter/>
        </div>

    )
}
