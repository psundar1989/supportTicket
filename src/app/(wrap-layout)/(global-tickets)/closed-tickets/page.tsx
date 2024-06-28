import { Container } from "reactstrap";

import ReusableTable from "@/components/common/ReusableTable";
import { closedTicketsData } from "@/constants/globalTickets";
import BreadCrumb from "@/components/common/BreadCrumb";

const ClosedTickets = () => {
  return (
    <div className="page-content">
      <Container fluid>
        <BreadCrumb pageTitle="Global Tickets" title="Closed Tickets" />
        <ReusableTable
          data={closedTicketsData}
          title=""
          id={1}
          create={false}
          header={false}
        />
      </Container>
    </div>
  );
};

export default ClosedTickets;