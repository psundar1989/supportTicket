import { Container } from "reactstrap";

import ReusableTable from "@/components/common/ReusableTable";
import { assignedTicketsData } from "@/constants/globalTickets";
import BreadCrumb from "@/components/common/BreadCrumb";

const AssignedTickets = () => {
  return (
    <div className="page-content">
      <Container fluid>
        <BreadCrumb  pageTitle="Global Tickets" title="Assigned Tickets" />
        <ReusableTable
          data={assignedTicketsData}
          title=""
          id={1}
          header={false}
        />
      </Container>
    </div>
  );
};

export default AssignedTickets