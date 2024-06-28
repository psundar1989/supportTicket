"use client";
import React, { useLayoutEffect,useEffect, useCallback, useState } from 'react';
import PropTypes from "prop-types";
import {  Collapse } from 'reactstrap';
import LayoutMenuData from '@/components/common/LayoutMenuData';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const VerticalLayout = ({layoutType}:{layoutType:string}) => {
    const navData = LayoutMenuData().props.children;

    const pathname = usePathname()


    useLayoutEffect(() => {

        // Loop through menu items and set aria-expanded and show class
        navData.forEach((menuItem: any) => {
            if (menuItem.link === pathname) {
                const element = document.getElementById(menuItem.id);
                if (element) {
                    element.setAttribute('aria-expanded', 'true');
                    element.nextElementSibling?.classList.add('show');
                }
            }

            // Check subItems
            if (menuItem?.subItems) {
                menuItem.subItems.forEach((subItem: any) => {
                    if (subItem.link === pathname) {
                        const element = document.getElementById(menuItem.id);
                        if (element) {
                            element.setAttribute('aria-expanded', 'true');
                            element.nextElementSibling?.classList.add('show');
                        }
                    }
                });
            }
        });
    }, [pathname,navData]);
    //console.log(pathname)

  return (
    <>
    {(navData || []).map((item : any, key : number) => {
                return (
                    <React.Fragment key={key}>
                        {/* Main Header */}
                        {item['isHeader'] ?
                            <li className="menu-title"><span data-key="t-menu">{item.label} </span></li>
                            : (
                                (item.subItems ? (
                                    <li className="nav-item">
                                        <Link
                                             onClick={item.click}
                                             id={item.id}
                                            className={`nav-link menu-link ${item?.link===pathname?"active":""}`}
                                            href={item.link?item.link:"#"}
                                            data-bs-toggle="collapse"
                                        >
                                            <i className={item.icon}></i>
                                            <span data-key="t-apps">{item.label}</span>
                                            {item.badgeName ?
                                                <span className={"badge badge-pill bg-" + item.badgeColor} data-key="t-new">{item.badgeName}</span>
                                                : null}
                                        </Link>
                                        <Collapse
                                            className="menu-dropdown "
                                            isOpen={item.stateVariables}
                                            id="sidebarApps">
                                            <ul className="nav nav-sm flex-column test" >
                                                {/* subItms  */}
                                                {item.subItems && ((item.subItems || []).map((subItem : any, key : number) => (
                                                    <React.Fragment key={key}>
                                                        {!subItem.isChildItem ? (
                                                            <li className="nav-item">
                                                                <Link
                                                                    href={subItem.link?subItem.link:'#'}
                                                                    id={subItem.id}
                                                                    className={`nav-link ${subItem?.link===pathname?"active":""}`}
                                                                >
                                                                    {subItem.label}
                                                                    {subItem.badgeName ?
                                                                        <span className={"badge badge-pill bg-" + subItem.badgeColor} data-key="t-new">{subItem.badgeName}</span>
                                                                        : null}
                                                                </Link>
                                                            </li>
                                                        ) : (
                                                            <li className="nav-item">
                                                                <Link
                                                                    onClick={subItem?.click}
                                                                    id={subItem.id}
                                                                    className="nav-link"
                                                                    href="/#"
                                                                    data-bs-toggle="collapse"
                                                                >
                                                                    {subItem.label}
                                                                    {subItem.badgeName ?
                                                                        <span className={"badge badge-pill bg-" + subItem.badgeColor} data-key="t-new">{subItem.badgeName}</span>
                                                                        : null}
                                                                </Link>
                                                                <Collapse className="menu-dropdown" isOpen={subItem.stateVariables} id="sidebarEcommerce">
                                                                    <ul className="nav nav-sm flex-column">
                                                                        {/* child subItms  */}
                                                                        {subItem.childItems && (
                                                                            (subItem.childItems || []).map((childItem : any, key : number) => (
                                                                                <React.Fragment key={key}>
                                                                                    {!childItem.childItems ?
                                                                                        <li className="nav-item">
                                                                                            <Link
                                                                                                href={childItem?.link}
                                                                                                className="nav-link">
                                                                                                {childItem.label}
                                                                                            </Link>
                                                                                        </li>
                                                                                        : <li className="nav-item">
                                                                                            <Link href="/#" className="nav-link" onClick={childItem.click} data-bs-toggle="collapse">
                                                                                                {childItem.label}
                                                                                            </Link>
                                                                                            <Collapse className="menu-dropdown" isOpen={childItem.stateVariables} id="sidebaremailTemplates">
                                                                                                <ul className="nav nav-sm flex-column">
                                                                                                    {childItem.childItems.map((subChildItem : any, key : number) => (
                                                                                                        <li className="nav-item" key={key}>
                                                                                                            <Link href={subChildItem.link} id={subChildItem.id} className="nav-link" data-key="t-basic-action">{subChildItem.label} </Link>
                                                                                                        </li>
                                                                                                    ))}
                                                                                                </ul>
                                                                                            </Collapse>
                                                                                        </li>
                                                                                    }
                                                                                </React.Fragment>
                                                                            ))
                                                                        )}
                                                                    </ul>
                                                                </Collapse>
                                                            </li>
                                                        )}
                                                    </React.Fragment>
                                                ))
                                                )}
                                            </ul>

                                        </Collapse>
                                    </li>
                                ) : (
                                    <li className="nav-item">
                                        <Link
                                            className={`nav-link menu-link ${item.link===pathname?"active":""}`}
                                            onClick={item.click}
                                            id={item.id}
                                            href={item.link?item.link:'#'}>
                                            <i className={item.icon}></i> <span>{item.label}</span>
                                            {item.badgeName ?
                                                <span className={"badge badge-pill bg-" + item.badgeColor} data-key="t-new">{item.badgeName}</span>
                                                : null}
                                        </Link>
                                    </li>
                                ))
                            )
                        }
                    </React.Fragment>
                );
            })}

    </>
  )
}

export default VerticalLayout