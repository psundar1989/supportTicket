"use client";
import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Widgets from "@/components/common/Widgets";
import { dashboardWidgets } from "@/constants/dashboard";
import TopSection from "@/components/dashboard/TopSection";
import RecentActivity from "./RecentActivity";

const Dashboard = () => {
  const [rightColumn, setRightColumn] = useState<boolean | null>(true);
  const toggleRightColumn = (): void => {
    setRightColumn(!rightColumn);
  };

  return (
    <Container fluid>
      <Row>
        <Col>
          <div className="h-100">
            <TopSection
              rightClickBtn={toggleRightColumn}
              title={"Dashboard"}
              pageTitle={"Support Tickets"}
            />
            <Row>
              <Widgets widgetData={dashboardWidgets as any} />
            </Row>
            <Row>
								<div className="col-md-12">
                </div>
            </Row>
          </div>
        </Col>
        <RecentActivity
						rightColumn={rightColumn}
						hideRightColumn={toggleRightColumn}
					/>
      </Row>
    </Container>
  );
};

export default Dashboard;
