"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { useSelector } from 'react-redux';

//import images
 import avatar1 from "@/assets/images/users/avatar-1.jpg";
import Image from 'next/image';

const ProfileDropdown = () => {

    const user = useSelector((state: any) => state.profileSlice.user);

    const [userName, setUserName] = useState("Admin");

    useEffect(() => {
        const authUSer: any = sessionStorage.getItem("authUser");
        if (authUSer) {
            const obj: any = JSON.parse(authUSer);
            setUserName(process.env.NEXTJS_DEFAULTAUTH === "fake" ? obj.username === undefined ? user.first_name ? user.first_name : obj.data.first_name : "Admin" || "Admin" :
                process.env.NEXTJS_DEFAULTAUTH === "support" ? obj.email && obj.email : "Admin"
            );
        }
    }, [userName, user]);

    //Dropdown Toggle
    const [isProfileDropdown, setIsProfileDropdown] = useState(false);
    const toggleProfileDropdown = () => {
        setIsProfileDropdown(!isProfileDropdown);
    };
    return (
        <React.Fragment>
            <Dropdown isOpen={isProfileDropdown} toggle={toggleProfileDropdown} className="ms-sm-3 header-item topbar-user">
                <DropdownToggle tag="button" type="button" className="btn">
                    <span className="d-flex align-items-center">
                        <Image className="rounded-circle header-profile-user" src={avatar1}
                            alt="Header Avatar" />
                        <span className="text-start ms-xl-2">
                            <span className="d-none d-xl-inline-block ms-1 fw-medium user-name-text"> {userName || "Admin"}</span>
                            <span className="d-none d-xl-block ms-1 fs-12 text-muted user-name-sub-text">Founder</span>
                        </span>
                    </span>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-end">
                    <h6 className="dropdown-header">Welcome {userName}!</h6>
                    <DropdownItem className='p-0'>
                        <Link href="/pages-profile-settings" className="dropdown-item">
                            <i className="bx bxs-user-circle text-muted fs-16 align-middle me-1"></i>
                            <span className="align-middle">Profile</span>
                        </Link>
                    </DropdownItem>
                    <DropdownItem className='p-0'>
                        <Link href="/apps-chat" className="dropdown-item">
                            <i className=" bx bx-message-alt-detail text-muted fs-16 align-middle me-1"></i> <span
                                className="align-middle">Messages</span>
                        </Link>
                    </DropdownItem>
                    <DropdownItem className='p-0'>
                        <Link href="/pages-faqs" className="dropdown-item">
                            <i
                                className="bx bxs-help-circle text-muted fs-16 align-middle me-1"></i> <span
                                    className="align-middle">Help</span>
                        </Link>
                    </DropdownItem>
                    <div className="dropdown-divider"></div>
                    <DropdownItem className='p-0'>
                        <Link href="/pages-profile-settings" className="dropdown-item">
                            <span
                                className="badge bg-success-subtle text-success mt-1 float-end">New</span><i
                                    className="bx bx-cog text-muted fs-16 align-middle me-1"></i> <span
                                        className="align-middle">Settings</span>
                        </Link>
                    </DropdownItem>
                    <DropdownItem className='p-0'>
                        <Link href="/logout" className="dropdown-item">
                            <i
                                className="bx bx-log-in-circle text-muted fs-16 align-middle me-1"></i> <span
                                    className="align-middle" data-key="t-logout">Logout</span>
                        </Link>
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </React.Fragment>
    );
};

export default ProfileDropdown;