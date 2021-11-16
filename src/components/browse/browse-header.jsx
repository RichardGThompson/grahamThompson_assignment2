import { NavLink } from "react-router-dom";
import { NavigationElement } from "./navigation-item";
import React, { useLayoutEffect, useState } from 'react';
import { TabletHeaderNavigation } from "./tablet-header-navigation";
import { SecondaryNavigation } from "./secondary-navigation";

export const BrowseHeader = (props) => {
    // An array containing the navigation elements
    const navElements = [
        {bodyText: "Home", linkPath: "#", isCurrent:true},
        {bodyText: "TV Shows", linkPath: "", isCurrent:false},
        {bodyText: "Movies", linkPath: "", isCurrent:false},
        {bodyText: "New & Popular", linkPath: "", isCurrent:false},
        {bodyText: "My List", linkPath: "", isCurrent:false}
    ];

    return(
        <div className="pinning-header">
            <div className="pinning-header-container">
                <div className="main-header has-billboard menu-navigation">
                    <NavLink className="logo icon-logoUpdate" to="/browse"></NavLink>
                    <ul className="tabbed-primary-navigation">
                        {/* Create the tablet navigation */}
                        <TabletHeaderNavigation navigationElements={navElements}/>
                        
                        {/* Create navigation elements for the header. */}
                        {navElements.map((elem) => <NavigationElement bodyText={elem.bodyText} linkPath={elem.linkPath} isCurrent={elem.isCurrent}/>)}
                    </ul>

                    <SecondaryNavigation/>
                </div>
            </div>
        </div>
    );
}