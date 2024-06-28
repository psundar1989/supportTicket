"use client"
import React from 'react';
import CountUp from "react-countup";
import { Card, CardBody, Col } from 'reactstrap';
import Link from 'next/link';
import { WidgetObject } from '@/interfaces/dashboardInterface';



const Widgets = ({widgetData} : {widgetData : WidgetObject[]}) => {
    return (
        <React.Fragment>
            {widgetData?.map((item, key) => (
                <Col  key={key}>
                     <Link href={item.linkTo} className="text-decoration-none">                 
                    <Card  className="card-animate dashboard_card">
                        <CardBody>
                            <div className="d-flex align-items-center gap-2">
                                <div className="flex-grow-1 overflow-hidden">
                                    <p className="text-uppercase fw-medium text-muted text-truncate mb-0" style={{width:'150px'}}>{item.label}</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-end justify-content-between mt-4">
                                <div>
                                    <h4 className="fs-22 fw-semibold ff-secondary mb-4"><span className="counter-value" data-target="559.25">
                                        <CountUp
                                            start={0}
                                            // prefix={item.prefix}
                                            // suffix={item.suffix}
                                            // separator={item.separator}
                                            end={item.counter}
                                           // decimals={item.decimals}
                                            duration={3}
                                        />
                                    </span></h4>    
                                </div>
                                <div className="avatar-sm flex-shrink-0">
                                    <span className={"avatar-title rounded fs-3 bg-" + item.bgcolor+"-subtle"}>
                                        <i className={`text-${item.bgcolor} ${item.icon}`}></i>
                                    </span>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                    </Link>
                </Col>))}
        </React.Fragment>
    );
};

export default Widgets;