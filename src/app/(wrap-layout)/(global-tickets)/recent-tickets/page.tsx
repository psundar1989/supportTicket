import { Container } from "reactstrap";

import ReusableTable from "@/components/common/ReusableTable";
import { recentTicketsData } from "@/constants/globalTickets";
import BreadCrumb from "@/components/common/BreadCrumb";

const RecentTickets = () => {
  return (
    <div className="page-content">
      <Container fluid>
        <BreadCrumb pageTitle="Global Tickets" title="Recent Tickets" />
        <ReusableTable
          data={recentTicketsData}
					title=""
					id={1}
					header={false}
        />
      </Container>
    </div>
  );
};

export default RecentTickets;
