import Link from "next/link";
import React from "react";
import { Col, Row } from "reactstrap";

interface BreadCrumbProps {
  title: string;
  pageTitle: string;
}

const BreadCrumb = ({ title, pageTitle }: BreadCrumbProps) => {
  return (
    <Row>
      <Col xs={12}>
        <div className="page-title-box d-sm-flex align-items-center justify-content-between">
          <h4 className="mb-sm-0">{title}</h4>

          <div className="page-title-right">
            <ol className="breadcrumb m-0">
              <li className="breadcrumb-item">
                <Link href="#">{pageTitle}</Link>
              </li>
              <li className="breadcrumb-item active">{title}</li>
            </ol>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default BreadCrumb;
