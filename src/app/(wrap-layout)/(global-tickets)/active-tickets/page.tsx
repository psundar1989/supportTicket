import { Container } from "reactstrap";

import ReusableTable from "@/components/common/ReusableTable";
import { activeTicketsdata } from "@/constants/globalTickets";
import BreadCrumb from "@/components/common/BreadCrumb";

const ActiveTickets = () => {
  return (
    <div className="page-content">
      <Container fluid>
        <BreadCrumb pageTitle="Global Tickets" title="Active Tickets" />
        <ReusableTable
          data={activeTicketsdata}
          title=""
          id={1}
          create={false}
          header={false}
        />
      </Container>
    </div>
  );
};

export default ActiveTickets;
