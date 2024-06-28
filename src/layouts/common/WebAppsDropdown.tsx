import React, { useState } from 'react';
import { Col, Dropdown, DropdownMenu, DropdownToggle, Row } from 'reactstrap';
//import logo_smCommonImages from '../Common/CommonImages/CommonImages'
//import images
import github from '../../assets/images/brands/github.png';
import bitbucket from '../../assets/images/brands/bitbucket.png';
import dribbble from '../../assets/images/brands/dribbble.png';
import dropbox from '../../assets/images/brands/dropbox.png';
import Link from 'next/link';


const WebAppsDropdown = () => {
	const [isWebAppDropdown, setIsWebAppDropdown] = useState<boolean>(false);
	const toggleWebAppDropdown = () => {
		setIsWebAppDropdown(!isWebAppDropdown);
	};
	return (
		<React.Fragment>
			<Dropdown
				isOpen={isWebAppDropdown}
				toggle={toggleWebAppDropdown}
				className="topbar-head-dropdown ms-1 header-item"
			>
				<DropdownToggle
					tag="button"
					type="button"
					className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle"
				>
					<i className="bx bx-category-alt fs-22"></i>
				</DropdownToggle>
				<DropdownMenu className="p-0 dropdown-menu-lg dropdown-menu-end">
					<div className="p-3 border border-dashed border-top-0 border-start-0 border-end-0">
						<Row className="align-items-center">
							<Col>
								<h6 className="m-0 fw-semibold fs-15"> Web Apps </h6>
							</Col>
							<div className="col-auto">
								<Link href="#" className="btn btn-sm btn-soft-info">
									{' '}
									View All Apps
									<i className="align-middle ri-arrow-right-s-line"></i>
								</Link>
							</div>
						</Row>
					</div>

					<div className="p-2">
						<div className="row g-0">
							<Col>
								<Link
									className="dropdown-icon-item"
									href="https://staffpulse.in/"
									target="blank"
								>
									{/* <img src={logo_smCommonImages.logo_sm} alt="Github" /> */}
								
									<i className="bx bx-news fs-22"/>
									<span>HRMS</span>
								</Link>
							</Col>
							<Col>
								<Link className="dropdown-icon-item" href="#" target="blank">
									{/* <img src={logo_smCommonImages.logo_sm} alt="bitbucket" /> */}
									<i className="bx bx-slideshow fs-22"/>
									<span>Project</span>
								</Link>
							</Col>
							<Col>
								<Link className="dropdown-icon-item" href="#" target="blank">
									{/* <img src={logo_smCommonImages.logo_sm} alt="dribbble" /> */}
									<i className="bx bx-wallet-alt fs-22"/>
									<span>Asset</span>
								</Link>
							</Col>
						</div>

						<div className="row g-0">
							<Col>
								<Link className="dropdown-icon-item" href="#" target="blank">
									{/* <img src={logo_smCommonImages.logo_sm} alt="dropbox" /> */}
									<i className="bx bx-buildings fs-22"/>
									<span>Finance</span>
								</Link>
							</Col>
						</div>
					</div>
				</DropdownMenu>
			</Dropdown>
		</React.Fragment>
	);
};

export default WebAppsDropdown;
