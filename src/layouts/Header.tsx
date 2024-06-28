import React, { useState } from "react";
import { Button, Dropdown, DropdownMenu, DropdownToggle, Form } from 'reactstrap';
import FullScreen from "./common/FullScreen";
import WebAppsDropdown from "./common/WebAppsDropdown";
import LightDark from "./common/LightDark";
import { RootLayoutState } from "@/interfaces/layoutInterface";
import { useSelector,useDispatch } from "react-redux";
import NotificationDropdown from "./common/NotificationDropdown";
import ProfileDropdown from "./common/ProfileDropdown";
import { changeSidebarVisibility } from "@/utils/layoutHandlers";
import CreateTicketComp from "@/components/common/CreateTicketComp";


const Header = ({ headerClass }: any) => {
  const {sidebarVisibilitytype} = useSelector((state:RootLayoutState) => state.layoutSlice);
  //console.log(sidebarVisibilitytype)

  const dispatch:any = useDispatch();

  //hamburger handler
  const toogleMenuBtn = () => {
    const windowSize = document.documentElement.clientWidth;
    const humberIcon = document.querySelector(".hamburger-icon") as HTMLElement;
    dispatch(changeSidebarVisibility("show"));
   

    if (windowSize > 767)
        humberIcon.classList.toggle('open');

    //For collapse horizontal menu
    if (document.documentElement.getAttribute('data-layout') === "horizontal") {
        document.body.classList.contains("menu") ? document.body.classList.remove("menu") : document.body.classList.add("menu");
    }

    //For collapse vertical and semibox menu
    if (sidebarVisibilitytype === "show" && (document.documentElement.getAttribute('data-layout') === "vertical" || document.documentElement.getAttribute('data-layout') === "semibox")) {
        if (windowSize < 1025 && windowSize > 767) {
            document.body.classList.remove('vertical-sidebar-enable');
            (document.documentElement.getAttribute('data-sidebar-size') === 'sm') ? document.documentElement.setAttribute('data-sidebar-size', '') : document.documentElement.setAttribute('data-sidebar-size', 'sm');
        } else if (windowSize > 1025) {
            document.body.classList.remove('vertical-sidebar-enable');
            (document.documentElement.getAttribute('data-sidebar-size') === 'lg') ? document.documentElement.setAttribute('data-sidebar-size', 'sm') : document.documentElement.setAttribute('data-sidebar-size', 'lg');
        } else if (windowSize <= 767) {
            document.body.classList.add('vertical-sidebar-enable');
            document.documentElement.setAttribute('data-sidebar-size', 'lg');
        }
    }


    //Two column menu
    if (document.documentElement.getAttribute('data-layout') === "twocolumn") {
        document.body.classList.contains('twocolumn-panel') ? document.body.classList.remove('twocolumn-panel') : document.body.classList.add('twocolumn-panel');
    }
};


  return (
    <header id="page-topbar" className={headerClass}>
      <div className="layout-width">
        <div className="navbar-header">
          <div className="d-flex align-items-center">
            <button
              onClick={toogleMenuBtn}
              type="button"
              className="btn btn-sm px-3 fs-16 header-item vertical-menu-btn topnav-hamburger"
              id="topnav-hamburger-icon"
            >
              <span className="hamburger-icon">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>

            <CreateTicketComp/>
          </div>
          <div className="d-flex align-items-center">
            <FullScreen/>
            <WebAppsDropdown/>
            <LightDark/>
            <NotificationDropdown/>
            <ProfileDropdown/>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
