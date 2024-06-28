import { Container } from "reactstrap";

import ReusableTable from "@/components/common/ReusableTable";
import { overdueTicketsData } from "@/constants/globalTickets";
import BreadCrumb from "@/components/common/BreadCrumb";

const OverdueTickets = () => {
  return (
    <div className="page-content">
      <Container fluid>
        <BreadCrumb pageTitle="Global Tickets" title="Overdue Tickets"  />
        <ReusableTable
          data={overdueTicketsData}
          title=""
          id={1}
          header={false}
        />
      </Container>
    </div>
  );
};

export default OverdueTickets;