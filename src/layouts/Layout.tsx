"use client";
import React, { useEffect, useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer';
//import RightSidebar from './RightSidebar'
import { useSelector, useDispatch } from 'react-redux';
import {RootLayoutState} from '@/interfaces/layoutInterface'


const Layout = ({children}:{children: React.ReactNode}) => {
  const [headerClass, setHeaderClass] = useState("");

  const {sidebarVisibilitytype,layoutType} = useSelector((state:RootLayoutState) => state.layoutSlice);
//   console.log(sidebarVisibilitytype,layoutType)


//sidemenu handler
  useEffect(() => {
    window.addEventListener("scroll", scrollNavigation, true);
});

function scrollNavigation() {
    var scrollup = document.documentElement.scrollTop;
    if (scrollup > 50) {
        setHeaderClass("topbar-shadow");
    } else {
        setHeaderClass("");
    }
}

useEffect(() => {
  const humberIcon = document.querySelector(".hamburger-icon") as HTMLElement;
  if (sidebarVisibilitytype === 'show' || layoutType === "vertical" || layoutType === "twocolumn") {
      humberIcon.classList.remove('open');
  } else {
      humberIcon && humberIcon.classList.add('open');
  }
}, [sidebarVisibilitytype, layoutType]);


// //Dark or Light Mode Handler

  return (
    <section>
            <div id="layout-wrapper">
                <Header headerClass={headerClass} />
                <Sidebar layoutType={layoutType as string}/>
                <div className="main-content">
                    {children}
                    <Footer />
                </div>
            </div>
          {/* <RightSidebar /> */}
    </section>
  )
}

export default Layout;