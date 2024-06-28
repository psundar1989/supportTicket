import { Container } from "reactstrap";

import ReusableTable from "@/components/common/ReusableTable";
import { onholdTicketsData } from "@/constants/globalTickets";
import BreadCrumb from "@/components/common/BreadCrumb";

const OnHoldTickets = () => {
  return (
    <div className="page-content">
      <Container fluid>
        <BreadCrumb pageTitle="Global Tickets" title="On-Hold Tickets" />
        <ReusableTable
          data={onholdTicketsData}
          title=""
          id={1}
          create={false}
          header={false}
        />
      </Container>
    </div>
  );
};

export default OnHoldTickets;