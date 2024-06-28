//"use client";
import React,{useEffect} from 'react';
import { Container } from "reactstrap";
import SimpleBar from "simplebar-react";
import VerticalLayout from './common/VerticalLayout';


//import logos
import logoSm from "@/assets/images/c_logo.svg";
import logoDark from "@/assets/images/cr_logo.svg";
import logoLight from "@/assets/images/cr_logo.svg";
import Link from 'next/link';
import Image from 'next/image';

const Sidebar = ({layoutType}:{layoutType:string}) => {

  //overlay
  // useEffect(() => {
  //   const verticalOverlay = document.getElementsByClassName("vertical-overlay");
  //   if (verticalOverlay) {
  //     verticalOverlay[0].addEventListener("click", function () {
  //       document.body.classList.remove("vertical-sidebar-enable");
  //     });
  //   }
  // });

  const addEventListenerOnSmHoverMenu = () => {
    // add listener Sidebar Hover icon on change layout from setting
    if (document.documentElement.getAttribute('data-sidebar-size') === 'sm-hover') {
      document.documentElement.setAttribute('data-sidebar-size', 'sm-hover-active');
    } else if (document.documentElement.getAttribute('data-sidebar-size') === 'sm-hover-active') {
      document.documentElement.setAttribute('data-sidebar-size', 'sm-hover');
    } else {
      document.documentElement.setAttribute('data-sidebar-size', 'sm-hover');
    }
  };

  return (
    <>
    <div>
    <div className="app-menu navbar-menu">
        <div className="navbar-brand-box">
          <Link href="/" className="logo logo-dark">
            <span className="logo-sm">
              <Image src={logoSm} alt="" height="30" />
            </span>
            <span className="logo-lg">
              <Image src={logoDark} alt="" height="35" />
            </span>
          </Link>

          <Link href="/" className="logo logo-light">
            <span className="logo-sm">
              <Image src={logoSm} alt="" height="30" />
            </span>
            <span className="logo-lg">
              <Image src={logoLight} alt="" height="35" />
            </span>
          </Link>
          <button
            onClick={addEventListenerOnSmHoverMenu}
            type="button"
            className="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover"
            id="vertical-hover"
          >
            <i className="ri-record-circle-line"></i>
          </button>
        </div>
        <React.Fragment>
            <SimpleBar id="scrollbar" className="h-100">
              <Container fluid>
                <div id="two-column-menu"></div>
                <ul className="navbar-nav" id="navbar-nav">
                  <VerticalLayout layoutType={layoutType} />
                </ul>
              </Container>
            </SimpleBar>
            <div className="sidebar-background"></div>
          </React.Fragment>
        </div>
        </div>
    <div className="vertical-overlay"></div>
    </>
  )
}

export default Sidebar