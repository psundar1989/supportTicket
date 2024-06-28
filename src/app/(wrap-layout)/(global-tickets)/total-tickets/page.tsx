import { Container, Row } from 'reactstrap';

import ReusableTable from "@/components/common/ReusableTable";
import { globalTicketData } from "@/constants/globalTickets";
import BreadCrumb from "@/components/common/BreadCrumb";

const TotalTickets = () => {
  return (
    <div className="page-content">
       <Container fluid>
        <BreadCrumb pageTitle="Global Tickets" title="Total Tickets" />
        <ReusableTable
          data={globalTicketData}
					title=""
					id={1}
          create={false}
					header={false}
        />
      </Container>
    </div>
  )
}

export default TotalTickets