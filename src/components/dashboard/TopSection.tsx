"use client";
import { Col, Row } from "reactstrap";
import { useState } from "react";
import Link from "next/link";
import { TopSectionData } from "@/interfaces/dashboardInterface";

const TopSection = ({ title, pageTitle, rightClickBtn }: TopSectionData) => {
  const [arrowClass, setArrowClass] = useState("right");
  const arrowChangeFn = () =>
    setArrowClass((prev) => (prev === "right" ? "left" : "right"));

  return (
    <Row>
      <Col xs={12}>
        <div className="page-title-box d-sm-flex align-items-center justify-content-between">
          <h4 className="mb-sm-0">{title}</h4>
          <div
            className=""
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
            <div className="page-title-right">
              <ol className="breadcrumb m-0">
                <li className="breadcrumb-item">
                  <Link href="#">{pageTitle}</Link>
                </li>
                {title && <li className="breadcrumb-item active">{title}</li>}
              </ol>
            </div>
            <div className=" ">
              <button
                type="button"
                className="btn btn-soft-info btn-icon waves-effect waves-light layout-rightside-btn"
                onClick={() => {
                  rightClickBtn();
                  arrowChangeFn();
                }}
              >
                <i className={`ri-arrow-${arrowClass}-fill`}></i>
              </button>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default TopSection;
