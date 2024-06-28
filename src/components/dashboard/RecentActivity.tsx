"use client";
import React from "react";
import { Card, CardBody } from "reactstrap";
import SimpleBar from "simplebar-react";
import Link from "next/link";
import Image from "next/image";

//import images
import avatar2 from "../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../assets/images/users/avatar-3.jpg";

const RecentActivity = (props: any) => {
  return (
    <React.Fragment>
      <div
        className={
          props.rightColumn
            ? "col-auto layout-rightside-col d-block"
            : "col-auto layout-rightside-col d-none"
        }
        id="layout-rightside-coll"
      >
        <div className="overlay" onClick={props.hideRightColumn}></div>
        <div className="layout-rightside">
          <Card className="h-100 rounded-0">
            <CardBody className="p-0">
              <div className="p-3">
                <h6 className="text-muted mb-0 text-uppercase fw-semibold">
                  Recent Activity test
                </h6>
              </div>
              <SimpleBar style={{ maxHeight: "750px" }} className="p-3 pt-0">
                <div className="acitivity-timeline acitivity-main">
                  <div className="acitivity-item d-flex">
                    <div className="flex-shrink-0 avatar-xs acitivity-avatar">
                      <div className="avatar-title bg-success-subtle text-success rounded-circle">
                        <i className="ri-shopping-cart-2-line"></i>
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6 className="mb-1 lh-base">Purchase by James Price</h6>
                      <p className="text-muted mb-1">
                        Product noise evolve smartwatch{" "}
                      </p>
                      <small className="mb-0 text-muted">02:14 PM Today</small>
                    </div>
                  </div>
                  <div className="acitivity-item py-3 d-flex">
                    <div className="flex-shrink-0 avatar-xs acitivity-avatar">
                      <div className="avatar-title bg-danger-subtle text-danger rounded-circle">
                        <i className="ri-stack-fill"></i>
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6 className="mb-1 lh-base">
                        Added new{" "}
                        <span className="fw-semibold">style collection</span>
                      </h6>
                      <p className="text-muted mb-1">By Nesta Technologies</p>
                      <div className="d-inline-flex gap-2 border border-dashed p-2 mb-2">
                        <Link
                          href="/apps-ecommerce-product-details"
                          className="bg-light rounded p-1"
                        >
                          {/* <img
                            src={product8}
                            alt=""
                            className="img-fluid d-block"
                          /> */}
                        </Link>
                        <Link
                          href="/apps-ecommerce-product-details"
                          className="bg-light rounded p-1"
                        >
                          {/* <img
                            src={product2}
                            alt=""
                            className="img-fluid d-block"
                          /> */}
                        </Link>
                        <Link
                          href="/apps-ecommerce-product-details"
                          className="bg-light rounded p-1"
                        >
                          {/* <img
                            src={product10}
                            alt=""
                            className="img-fluid d-block"
                          /> */}
                        </Link>
                      </div>
                      <p className="mb-0 text-muted">
                        <small>9:47 PM Yesterday</small>
                      </p>
                    </div>
                  </div>
                  <div className="acitivity-item py-3 d-flex">
                    <div className="flex-shrink-0">
                      <Image
                        src={avatar2}
                        alt=""
                        className="avatar-xs rounded-circle acitivity-avatar"
                      />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6 className="mb-1 lh-base">
                        Natasha Carey have liked the products
                      </h6>
                      <p className="text-muted mb-1">
                        Allow users to like products in your WooCommerce store.
                      </p>
                      <small className="mb-0 text-muted">25 Dec, 2021</small>
                    </div>
                  </div>
                  <div className="acitivity-item py-3 d-flex">
                    <div className="flex-shrink-0">
                      <div className="avatar-xs acitivity-avatar">
                        <div className="avatar-title rounded-circle bg-secondary">
                          <i className="mdi mdi-sale fs-14"></i>
                        </div>
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6 className="mb-1 lh-base">
                        Today offers by{" "}
                        <Link
                          href="/apps-ecommerce-seller-details"
                          className="link-secondary"
                        >
                          Digitech Galaxy
                        </Link>
                      </h6>
                      <p className="text-muted mb-2">
                        Offer is valid on orders of Rs.500 Or above for selected
                        products only.
                      </p>
                      <small className="mb-0 text-muted">12 Dec, 2021</small>
                    </div>
                  </div>
                  <div className="acitivity-item py-3 d-flex">
                    <div className="flex-shrink-0">
                      <div className="avatar-xs acitivity-avatar">
                        <div className="avatar-title rounded-circle bg-danger-subtle text-danger">
                          <i className="ri-bookmark-fill"></i>
                        </div>
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6 className="mb-1 lh-base">Favoried Product</h6>
                      <p className="text-muted mb-2">
                        Esther James have favorited product.
                      </p>
                      <small className="mb-0 text-muted">25 Nov, 2021</small>
                    </div>
                  </div>
                  <div className="acitivity-item py-3 d-flex">
                    <div className="flex-shrink-0">
                      <div className="avatar-xs acitivity-avatar">
                        <div className="avatar-title rounded-circle bg-secondary">
                          <i className="mdi mdi-sale fs-14"></i>
                        </div>
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6 className="mb-1 lh-base">
                        Flash sale starting{" "}
                        <span className="text-primary">Tomorrow.</span>
                      </h6>
                      <p className="text-muted mb-0">
                        Flash sale by{" "}
                        <Link href="#" className="link-secondary fw-medium">
                          Zoetic Fashion
                        </Link>
                      </p>
                      <small className="mb-0 text-muted">22 Oct, 2021</small>
                    </div>
                  </div>
                  <div className="acitivity-item py-3 d-flex">
                    <div className="flex-shrink-0">
                      <div className="avatar-xs acitivity-avatar">
                        <div className="avatar-title rounded-circle bg-info-subtle text-info">
                          <i className="ri-line-chart-line"></i>
                        </div>
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6 className="mb-1 lh-base">Monthly sales report</h6>
                      <p className="text-muted mb-2">
                        <span className="text-danger">2 days left</span>{" "}
                        notification to submit the monthly sales report.{" "}
                        <Link
                          href="#"
                          className="link-warning text-decoration-underline"
                        >
                          Reports Builder
                        </Link>
                      </p>
                      <small className="mb-0 text-muted">15 Oct</small>
                    </div>
                  </div>
                  <div className="acitivity-item d-flex">
                    <div className="flex-shrink-0">
                      <Image
                        src={avatar3}
                        alt=""
                        className="avatar-xs rounded-circle acitivity-avatar"
                      />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6 className="mb-1 lh-base">Frank Hook Commented</h6>
                      <p className="text-muted mb-2 fst-italic">
                        <q className="blockquote"> A product that has reviews is more likable to be sold
                        than a product.</q>
                      </p>
                      <small className="mb-0 text-muted">26 Aug, 2021</small>
                    </div>
                  </div>
                </div>
              </SimpleBar>
            </CardBody>
          </Card>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RecentActivity;
