// Recent Tickets Data
// Global Tickets Data
// Active Tickets Data
// Closed Tickets Data
// On-hold Tickets Data
// Overdue Tickets Data
// Assigned Tickets Data



// Recent Tickets Data
const recentTicketsData = [
    {
        id: 1,
        ticketId: '#VLZ631',
        ticket_details: {
            id: 1,
            title: 'Lorem Ipsum Text',
            date: '18 Aug, 2016',
            priority: 'Critical',
            category: 'Design',
            year: '7 years ago',
        },
        custom_user:"Timothy L. Brodbeck (Customer)",
        assignto:{
           label1:"Self Assign",
           label2:"Other Assign"
       },
        status: "New",
        statusClass: "warning",
        ticketActions: {
            logic: true,
            view_link: "/ticket-details"
        }

    },
    {
        id: 2,
        ticketId: '#VLZ632',
        ticket_details: {
            id: 1,
            title: 'Lorem Ipsum Text',
            date: '18 Aug, 2016',
            priority: 'Medium',
            category: 'Design',
            year: '7 years ago',
        },
        custom_user:"Timothy L. Brodbeck (Customer)",
        assignto:{
            label1:"Self Assign",
            label2:"Other Assign"
        },
        status: "New",
        statusClass: "warning",
        ticketActions: {
            logic: true,
            view_link: "/ticket-details"
        }

        
    },
    {
        id: 3,
        ticketId: '#VLZ632',
        ticket_details: {
            id: 1,
            title: 'Omnis pariatur numquam molestiae',
            date: '18 Aug, 2016',
            priority: 'Low',
            category: 'Design',
            year: '7 years ago',
        },
        custom_user:"Timothy L. Brodbeck (Customer)",
        assignto:{
            label1:"Self Assign",
            label2:"Other Assign"
        },
        status: "New",
        statusClass: "warning",
        ticketActions: {
            logic: true,
            view_link: "/ticket-details"
        }
    },
    {
        id: 4,
        ticketId: '#VLZ633',
        ticket_details: {
            id: 1,
            title: 'Omnis pariatur numquam molestiae',
            date: '18 Aug, 2016',
            priority: 'High',
            category: 'Design',
            year: '7 years ago',
        },
        custom_user:"Timothy L. Brodbeck (Customer)",
        assignto:{
            label1:"Self Assign",
            label2:"Other Assign"
        },
        status: "New",
        statusClass: "warning",
        ticketActions: {
            logic: true,
            view_link: "/ticket-details"
        }
    },

    {
        id: 5,
        ticketId: '#VLZ634',
        ticket_details: {
            id: 1,
            title: 'Omnis pariatur numquam molestiae',
            date: '18 Aug, 2016',
            priority: 'Critical',
            category: 'Design',
            year: '7 years ago',
        },
        custom_user:"Timothy L. Brodbeck (Customer)",
        assignto:{
            label1:"Self Assign",
            label2:"Other Assign"
        },
        status: "New",
        statusClass: "warning",
        ticketActions: {
            logic: true,
            view_link: "/ticket-details"
        }
    },
    {
        id: 6,
        ticketId: '#VLZ635',
        ticket_details: {
            id: 1,
            title: 'Omnis pariatur numquam molestiae',
            date: '18 Aug, 2016',
            priority: 'High',
            category: 'Design',
            year: '7 years ago',
        },
        custom_user:"Timothy L. Brodbeck (Customer)",
        assignto:{
            label1:"Self Assign",
            label2:"Other Assign"
        },
        status: "New",
        statusClass: "warning",
        ticketActions: {
            logic: true,
            view_link: "/ticket-details"
        }
    },
    {
        id: 7,
        ticketId: '#VLZ636',
        ticket_details: {
            id: 1,
            title: 'Omnis pariatur numquam molestiae',
            date: '18 Aug, 2016',
            priority: 'High',
            category: 'Design',
            year: '7 years ago',
        },
        custom_user:"Timothy L. Brodbeck (Customer)",
        assignto:{
            label1:"Self Assign",
            label2:"Other Assign"
        },
        status: "New",
        statusClass: "warning",
        ticketActions: {
            logic: true,
            view_link: "/ticket-details"
        }
    },
    {
        id: 8,
        ticketId: '#VLZ637',
        ticket_details: {
            id: 1,
            title: 'Omnis pariatur numquam molestiae',
            date: '18 Aug, 2016',
            priority: 'Critical',
            category: 'Design',
            year: '7 years ago',
        },
        custom_user:"Timothy L. Brodbeck (Customer)",
        assignto:{
            label1:"Self Assign",
            label2:"Other Assign"
        },
        status: "New",
        statusClass: "warning",
        ticketActions: {
            logic: true,
            view_link: "/ticket-details"
        }
    },
    {
        id: 9,
        ticketId: '#VLZ638',
        ticket_details: {
            id: 1,
            title: 'Omnis pariatur numquam molestiae',
            date: '18 Aug, 2016',
            priority: 'Critical',
            category: 'Design',
            year: '7 years ago',
        },
        custom_user:"Timothy L. Brodbeck (Customer)",
        assignto:{
            label1:"Self Assign",
            label2:"Other Assign"
        },
        status: "New",
        statusClass: "warning",
        ticketActions: {
            logic: true,
            view_link: "/ticket-details"
        }
    },
    {
        id: 10,
        ticketId: '#VLZ639',
        ticket_details: {
            id: 1,
            title: 'Omnis pariatur numquam molestiae',
            date: '18 Aug, 2016',
            priority: 'Critical',
            category: 'Design',
            year: '7 years ago',
        },
        custom_user:"Timothy L. Brodbeck (Customer)",
        assignto:{
            label1:"Self Assign",
            label2:"Other Assign"
        },
        status: "New",
        statusClass: "warning",
        ticketActions: {
            logic: true,
            view_link: "/ticket-details"
        }
    },
];

// Global Tickets Data
const globalTicketData = [
    {
        id: 1,
        ticketId: '#VLZ631',
        ticket_details: {
            id: 1,
            title: 'Lorem Ipsum Text',
            date: '18 Aug, 2016',
            priority: 'Critical',
            category: 'Design',
            year: '7 years ago',
        },
        custom_user:"Timothy L. Brodbeck (Customer)",
        assignto:{
           label1:"Self Assign",
           label2:"Other Assign"
       },
        // assignto:[
        //     {
        //         value:'rajesh',
        //         label: 'Rajesh'
        //     },
        //     {
        //         value:'ramesh',
        //         label: 'Ramesh'
        //     },
        //     {
        //         value:'sundar',
        //         label: 'Sundar'
        //     },
        // ],
        status: "Closed",
        statusClass: "danger",
        ticketActions: {
            logic: true,
            view_link: "/ticket-details"
        }

    },
    {
        id: 2,
        ticketId: '#VLZ632',
        ticket_details: {
            id: 1,
            title: 'Lorem Ipsum Text',
            date: '18 Aug, 2016',
            priority: 'Medium',
            category: 'Design',
            year: '7 years ago',
        },
        custom_user:"Timothy L. Brodbeck (Customer)",
        assignto:{
            label1:"Self Assign",
            label2:"Other Assign"
        },
        status: "New",
        statusClass: "warning",
        ticketActions: {
            logic: true,
            view_link: "/ticket-details"
        }

        
    },
    {
        id: 3,
        ticketId: '#VLZ632',
        ticket_details: {
            id: 1,
            title: 'Omnis pariatur numquam molestiae',
            date: '18 Aug, 2016',
            priority: 'Low',
            category: 'Design',
            year: '7 years ago',
        },
        custom_user:"Timothy L. Brodbeck (Customer)",
        assignto:{
            label1:"Self Assign",
            label2:"Other Assign"
        },
        status: "New",
        statusClass: "warning",
        ticketActions: {
            logic: true,
            view_link: "/ticket-details"
        }
    },
    {
        id: 4,
        ticketId: '#VLZ633',
        ticket_details: {
            id: 1,
            title: 'Omnis pariatur numquam molestiae',
            date: '18 Aug, 2016',
            priority: 'High',
            category: 'Design',
            year: '7 years ago',
        },
        custom_user:"Timothy L. Brodbeck (Customer)",
        assignto:{
            label1:"Self Assign",
            label2:"Other Assign"
        },
        status: "Inprogress",
        statusClass: "warning",
        ticketActions: {
            logic: true,
            view_link: "/ticket-details"
        }
    },

    {
        id: 5,
        ticketId: '#VLZ634',
        ticket_details: {
            id: 1,
            title: 'Omnis pariatur numquam molestiae',
            date: '18 Aug, 2016',
            priority: 'Critical',
            category: 'Design',
            year: '7 years ago',
        },
        custom_user:"Timothy L. Brodbeck (Customer)",
        assignto:{
            label1:"Self Assign",
            label2:"Other Assign"
        },
        status: "New",
        statusClass: "warning",
        ticketActions: {
            logic: true,
            view_link: "/ticket-details"
        }
    },
    {
        id: 6,
        ticketId: '#VLZ635',
        ticket_details: {
            id: 1,
            title: 'Omnis pariatur numquam molestiae',
            date: '18 Aug, 2016',
            priority: 'High',
            category: 'Design',
            year: '7 years ago',
        },
        custom_user:"Timothy L. Brodbeck (Customer)",
        assignto:{
            label1:"Self Assign",
            label2:"Other Assign"
        },
        status: "Open",
        statusClass: "warning",
        ticketActions: {
            logic: true,
            view_link: "/ticket-details"
        }
    },
    {
        id: 7,
        ticketId: '#VLZ636',
        ticket_details: {
            id: 1,
            title: 'Omnis pariatur numquam molestiae',
            date: '18 Aug, 2016',
            priority: 'High',
            category: 'Design',
            year: '7 years ago',
        },
        custom_user:"Timothy L. Brodbeck (Customer)",
        assignto:{
            label1:"Self Assign",
            label2:"Other Assign"
        },
        status: "New",
        statusClass: "warning",
        ticketActions: {
            logic: true,
            view_link: "/ticket-details"
        }
    },
    {
        id: 8,
        ticketId: '#VLZ637',
        ticket_details: {
            id: 1,
            title: 'Omnis pariatur numquam molestiae',
            date: '18 Aug, 2016',
            priority: 'Critical',
            category: 'Design',
            year: '7 years ago',
        },
        custom_user:"Timothy L. Brodbeck (Customer)",
        assignto:{
            label1:"Self Assign",
            label2:"Other Assign"
        },
        status: "Closed",
        statusClass: "warning",
        ticketActions: {
            logic: true,
            view_link: "/ticket-details"
        }
    },
    {
        id: 9,
        ticketId: '#VLZ638',
        ticket_details: {
            id: 1,
            title: 'Omnis pariatur numquam molestiae',
            date: '18 Aug, 2016',
            priority: 'Critical',
            category: 'Design',
            year: '7 years ago',
        },
        custom_user:"Timothy L. Brodbeck (Customer)",
        assignto:{
            label1:"Self Assign",
            label2:"Other Assign"
        },
        status: "New",
        statusClass: "warning",
        ticketActions: {
            logic: true,
            view_link: "/ticket-details"
        }
    },
    {
        id: 10,
        ticketId: '#VLZ639',
        ticket_details: {
            id: 1,
            title: 'Omnis pariatur numquam molestiae',
            date: '18 Aug, 2016',
            priority: 'Critical',
            category: 'Design',
            year: '7 years ago',
        },
        custom_user:"Timothy L. Brodbeck (Customer)",
        assignto:{
            label1:"Self Assign",
            label2:"Other Assign"
        },
        status: "Inprogress",
        statusClass: "warning",
        ticketActions: {
            logic: true,
            view_link: "/ticket-details"
        }
    },
];

// Active Tickets Data
const activeTicketsdata = [
    {
        id: 1,
        ticketId: '#VLZ631',
        ticket_details: {
            id: 1,
            title: 'Lorem Ipsum Text',
            date: '18 Aug, 2016',
            priority: 'Critical',
            category: 'Design',
            year: '7 years ago',
        },
        custom_user:"Timothy L. Brodbeck (Customer)",
        assignto:{
           label1:"Self Assign",
           label2:"Other Assign"
       },
        // assignto:[
        //     {
        //         value:'rajesh',
        //         label: 'Rajesh'
        //     },
        //     {
        //         value:'ramesh',
        //         label: 'Ramesh'
        //     },
        //     {
        //         value:'sundar',
        //         label: 'Sundar'
        //     },
        // ],
        status: "Inprogress",
        statusClass: "danger",
        ticketActions: {
            logic: true,
            view_link: "/ticket-details"
        }

    },
    {
        id: 2,
        ticketId: '#VLZ632',
        ticket_details: {
            id: 1,
            title: 'Lorem Ipsum Text',
            date: '18 Aug, 2016',
            priority: 'Medium',
            category: 'Design',
            year: '7 years ago',
        },
        custom_user:"Timothy L. Brodbeck (Customer)",
        assignto:{
            label1:"Self Assign",
            label2:"Other Assign"
        },
        status: "Inprogress",
        statusClass: "warning",
        ticketActions: {
            logic: true,
            view_link: "/ticket-details"
        }

        
    },
    {
        id: 3,
        ticketId: '#VLZ632',
        ticket_details: {
            id: 1,
            title: 'Omnis pariatur numquam molestiae',
            date: '18 Aug, 2016',
            priority: 'Low',
            category: 'Design',
            year: '7 years ago',
        },
        custom_user:"Timothy L. Brodbeck (Customer)",
        assignto:{
            label1:"Self Assign",
            label2:"Other Assign"
        },
        status: "Inprogress",
        statusClass: "warning",
        ticketActions: {
            logic: true,
            view_link: "/ticket-details"
        }
    },
    {
        id: 4,
        ticketId: '#VLZ633',
        ticket_details: {
            id: 1,
            title: 'Omnis pariatur numquam molestiae',
            date: '18 Aug, 2016',
            priority: 'High',
            category: 'Design',
            year: '7 years ago',
        },
        custom_user:"Timothy L. Brodbeck (Customer)",
        assignto:{
            label1:"Self Assign",
            label2:"Other Assign"
        },
        status: "Inprogress",
        statusClass: "warning",
        ticketActions: {
            logic: true,
            view_link: "/ticket-details"
        }
    },

    {
        id: 5,
        ticketId: '#VLZ634',
        ticket_details: {
            id: 1,
            title: 'Omnis pariatur numquam molestiae',
            date: '18 Aug, 2016',
            priority: 'Critical',
            category: 'Design',
            year: '7 years ago',
        },
        custom_user:"Timothy L. Brodbeck (Customer)",
        assignto:{
            label1:"Self Assign",
            label2:"Other Assign"
        },
        status: "Open",
        statusClass: "warning",
        ticketActions: {
            logic: true,
            view_link: "/ticket-details"
        }
    },
    {
        id: 6,
        ticketId: '#VLZ635',
        ticket_details: {
            id: 1,
            title: 'Omnis pariatur numquam molestiae',
            date: '18 Aug, 2016',
            priority: 'High',
            category: 'Design',
            year: '7 years ago',
        },
        custom_user:"Timothy L. Brodbeck (Customer)",
        assignto:{
            label1:"Self Assign",
            label2:"Other Assign"
        },
        status: "Open",
        statusClass: "warning",
        ticketActions: {
            logic: true,
            view_link: "/ticket-details"
        }
    },
    {
        id: 7,
        ticketId: '#VLZ636',
        ticket_details: {
            id: 1,
            title: 'Omnis pariatur numquam molestiae',
            date: '18 Aug, 2016',
            priority: 'High',
            category: 'Design',
            year: '7 years ago',
        },
        custom_user:"Timothy L. Brodbeck (Customer)",
        assignto:{
            label1:"Self Assign",
            label2:"Other Assign"
        },
        status: "Re-open",
        statusClass: "warning",
        ticketActions: {
            logic: true,
            view_link: "/ticket-details"
        }
    },
    {
        id: 8,
        ticketId: '#VLZ637',
        ticket_details: {
            id: 1,
            title: 'Omnis pariatur numquam molestiae',
            date: '18 Aug, 2016',
            priority: 'Critical',
            category: 'Design',
            year: '7 years ago',
        },
        custom_user:"Timothy L. Brodbeck (Customer)",
        assignto:{
            label1:"Self Assign",
            label2:"Other Assign"
        },
        status: "Inprogress",
        statusClass: "warning",
        ticketActions: {
            logic: true,
            view_link: "/ticket-details"
        }
    },
    {
        id: 9,
        ticketId: '#VLZ638',
        ticket_details: {
            id: 1,
            title: 'Omnis pariatur numquam molestiae',
            date: '18 Aug, 2016',
            priority: 'Critical',
            category: 'Design',
            year: '7 years ago',
        },
        custom_user:"Timothy L. Brodbeck (Customer)",
        assignto:{
            label1:"Self Assign",
            label2:"Other Assign"
        },
        status: "New",
        statusClass: "warning",
        ticketActions: {
            logic: true,
            view_link: "/ticket-details"
        }
    },
    {
        id: 10,
        ticketId: '#VLZ639',
        ticket_details: {
            id: 1,
            title: 'Omnis pariatur numquam molestiae',
            date: '18 Aug, 2016',
            priority: 'Critical',
            category: 'Design',
            year: '7 years ago',
        },
        custom_user:"Timothy L. Brodbeck (Customer)",
        assignto:{
            label1:"Self Assign",
            label2:"Other Assign"
        },
        status: "Inprogress",
        statusClass: "warning",
        ticketActions: {
            logic: true,
            view_link: "/ticket-details"
        }
    },
];

// Closed Tickets Data
const closedTicketsData = [
    {
        id: 1,
        ticketId: '#VLZ631',
        ticket_details: {
            id: 1,
            title: 'Lorem Ipsum Text',
            date: '18 Aug, 2016',
            priority: 'Critical',
            category: 'Design',
            year: '7 years ago',
        },
        custom_user:"Timothy L. Brodbeck (Customer)",
        assignto:{
           label1:"Self Assign",
           label2:"Other Assign"
       },
        // assignto:[
        //     {
        //         value:'rajesh',
        //         label: 'Rajesh'
        //     },
        //     {
        //         value:'ramesh',
        //         label: 'Ramesh'
        //     },
        //     {
        //         value:'sundar',
        //         label: 'Sundar'
        //     },
        // ],
        status: "Closed",
        statusClass: "warning",
        ticketActions: {
            logic: true,
            view_link: "/ticket-details"
        }

    },
    {
        id: 2,
        ticketId: '#VLZ632',
        ticket_details: {
            id: 1,
            title: 'Lorem Ipsum Text',
            date: '18 Aug, 2016',
            priority: 'Medium',
            category: 'Design',
            year: '7 years ago',
        },
        custom_user:"Timothy L. Brodbeck (Customer)",
        assignto:{
            label1:"Self Assign",
            label2:"Other Assign"
        },
        status: "Closed",
        statusClass: "warning",
        ticketActions: {
            logic: true,
            view_link: "/ticket-details"
        }

        
    },
    {
        id: 3,
        ticketId: '#VLZ632',
        ticket_details: {
            id: 1,
            title: 'Omnis pariatur numquam molestiae',
            date: '18 Aug, 2016',
            priority: 'Low',
            category: 'Design',
            year: '7 years ago',
        },
        custom_user:"Timothy L. Brodbeck (Customer)",
        assignto:{
            label1:"Self Assign",
            label2:"Other Assign"
        },
        status: "Closed",
        statusClass: "warning",
        ticketActions: {
            logic: true,
            view_link: "/ticket-details"
        }
    },
    {
        id: 4,
        ticketId: '#VLZ633',
        ticket_details: {
            id: 1,
            title: 'Omnis pariatur numquam molestiae',
            date: '18 Aug, 2016',
            priority: 'High',
            category: 'Design',
            year: '7 years ago',
        },
        custom_user:"Timothy L. Brodbeck (Customer)",
        assignto:{
            label1:"Self Assign",
            label2:"Other Assign"
        },
        status: "Closed",
        statusClass: "warning",
        ticketActions: {
            logic: true,
            view_link: "/ticket-details"
        }
    },

    {
        id: 5,
        ticketId: '#VLZ634',
        ticket_details: {
            id: 1,
            title: 'Omnis pariatur numquam molestiae',
            date: '18 Aug, 2016',
            priority: 'Critical',
            category: 'Design',
            year: '7 years ago',
        },
        custom_user:"Timothy L. Brodbeck (Customer)",
        assignto:{
            label1:"Self Assign",
            label2:"Other Assign"
        },
        status: "Closed",
        statusClass: "warning",
        ticketActions: {
            logic: true,
            view_link: "/ticket-details"
        }
    },
    {
        id: 6,
        ticketId: '#VLZ635',
        ticket_details: {
            id: 1,
            title: 'Omnis pariatur numquam molestiae',
            date: '18 Aug, 2016',
            priority: 'High',
            category: 'Design',
            year: '7 years ago',
        },
        custom_user:"Timothy L. Brodbeck (Customer)",
        assignto:{
            label1:"Self Assign",
            label2:"Other Assign"
        },
        status: "Closed",
        statusClass: "warning",
        ticketActions: {
            logic: true,
            view_link: "/ticket-details"
        }
    },
    {
        id: 7,
        ticketId: '#VLZ636',
        ticket_details: {
            id: 1,
            title: 'Omnis pariatur numquam molestiae',
            date: '18 Aug, 2016',
            priority: 'High',
            category: 'Design',
            year: '7 years ago',
        },
        custom_user:"Timothy L. Brodbeck (Customer)",
        assignto:{
            label1:"Self Assign",
            label2:"Other Assign"
        },
        status: "Closed",
        statusClass: "warning",
        ticketActions: {
            logic: true,
            view_link: "/ticket-details"
        }
    },
    {
        id: 8,
        ticketId: '#VLZ637',
        ticket_details: {
            id: 1,
            title: 'Omnis pariatur numquam molestiae',
            date: '18 Aug, 2016',
            priority: 'Critical',
            category: 'Design',
            year: '7 years ago',
        },
        custom_user:"Timothy L. Brodbeck (Customer)",
        assignto:{
            label1:"Self Assign",
            label2:"Other Assign"
        },
        status: "Closed",
        statusClass: "warning",
        ticketActions: {
            logic: true,
            view_link: "/ticket-details"
        }
    },
    {
        id: 9,
        ticketId: '#VLZ638',
        ticket_details: {
            id: 1,
            title: 'Omnis pariatur numquam molestiae',
            date: '18 Aug, 2016',
            priority: 'Critical',
            category: 'Design',
            year: '7 years ago',
        },
        custom_user:"Timothy L. Brodbeck (Customer)",
        assignto:{
            label1:"Self Assign",
            label2:"Other Assign"
        },
        status: "Closed",
        statusClass: "warning",
        ticketActions: {
            logic: true,
            view_link: "/ticket-details"
        }
    },
    {
        id: 10,
        ticketId: '#VLZ639',
        ticket_details: {
            id: 1,
            title: 'Omnis pariatur numquam molestiae',
            date: '18 Aug, 2016',
            priority: 'Critical',
            category: 'Design',
            year: '7 years ago',
        },
        custom_user:"Timothy L. Brodbeck (Customer)",
        assignto:{
            label1:"Self Assign",
            label2:"Other Assign"
        },
        status: "Closed",
        statusClass: "warning",
        ticketActions: {
            logic: true,
            view_link: "/ticket-details"
        }
    },
];

// On-hold Tickets Data
const onholdTicketsData = [
    {
        id: 1,
        ticketId: '#VLZ631',
        ticket_details: {
            id: 1,
            title: 'Lorem Ipsum Text',
            date: '18 Aug, 2016',
            priority: 'Critical',
            category: 'Design',
            year: '7 years ago',
        },
        custom_user:"Timothy L. Brodbeck (Customer)",
        assignto:{
           label1:"Self Assign",
           label2:"Other Assign"
       },
        // assignto:[
        //     {
        //         value:'rajesh',
        //         label: 'Rajesh'
        //     },
        //     {
        //         value:'ramesh',
        //         label: 'Ramesh'
        //     },
        //     {
        //         value:'sundar',
        //         label: 'Sundar'
        //     },
        // ],
        status: "On-hold",
        statusClass: "warning",
        ticketActions: {
            logic: true,
            view_link: "/ticket-details"
        }

    },
    {
        id: 2,
        ticketId: '#VLZ632',
        ticket_details: {
            id: 1,
            title: 'Lorem Ipsum Text',
            date: '18 Aug, 2016',
            priority: 'Medium',
            category: 'Design',
            year: '7 years ago',
        },
        custom_user:"Timothy L. Brodbeck (Customer)",
        assignto:{
            label1:"Self Assign",
            label2:"Other Assign"
        },
        status: "On-hold",
        statusClass: "warning",
        ticketActions: {
            logic: true,
            view_link: "/ticket-details"
        }

        
    },
    {
        id: 3,
        ticketId: '#VLZ632',
        ticket_details: {
            id: 1,
            title: 'Omnis pariatur numquam molestiae',
            date: '18 Aug, 2016',
            priority: 'Low',
            category: 'Design',
            year: '7 years ago',
        },
        custom_user:"Timothy L. Brodbeck (Customer)",
        assignto:{
            label1:"Self Assign",
            label2:"Other Assign"
        },
        status: "On-hold",
        statusClass: "warning",
        ticketActions: {
            logic: true,
            view_link: "/ticket-details"
        }
    },
    {
        id: 4,
        ticketId: '#VLZ633',
        ticket_details: {
            id: 1,
            title: 'Omnis pariatur numquam molestiae',
            date: '18 Aug, 2016',
            priority: 'High',
            category: 'Design',
            year: '7 years ago',
        },
        custom_user:"Timothy L. Brodbeck (Customer)",
        assignto:{
            label1:"Self Assign",
            label2:"Other Assign"
        },
        status: "On-hold",
        statusClass: "warning",
        ticketActions: {
            logic: true,
            view_link: "/ticket-details"
        }
    },

    {
        id: 5,
        ticketId: '#VLZ634',
        ticket_details: {
            id: 1,
            title: 'Omnis pariatur numquam molestiae',
            date: '18 Aug, 2016',
            priority: 'Critical',
            category: 'Design',
            year: '7 years ago',
        },
        custom_user:"Timothy L. Brodbeck (Customer)",
        assignto:{
            label1:"Self Assign",
            label2:"Other Assign"
        },
        status: "On-hold",
        statusClass: "warning",
        ticketActions: {
            logic: true,
            view_link: "/ticket-details"
        }
    },
    {
        id: 6,
        ticketId: '#VLZ635',
        ticket_details: {
            id: 1,
            title: 'Omnis pariatur numquam molestiae',
            date: '18 Aug, 2016',
            priority: 'High',
            category: 'Design',
            year: '7 years ago',
        },
        custom_user:"Timothy L. Brodbeck (Customer)",
        assignto:{
            label1:"Self Assign",
            label2:"Other Assign"
        },
        status: "On-hold",
        statusClass: "warning",
        ticketActions: {
            logic: true,
            view_link: "/ticket-details"
        }
    },
    {
        id: 7,
        ticketId: '#VLZ636',
        ticket_details: {
            id: 1,
            title: 'Omnis pariatur numquam molestiae',
            date: '18 Aug, 2016',
            priority: 'High',
            category: 'Design',
            year: '7 years ago',
        },
        custom_user:"Timothy L. Brodbeck (Customer)",
        assignto:{
            label1:"Self Assign",
            label2:"Other Assign"
        },
        status: "On-hold",
        statusClass: "warning",
        ticketActions: {
            logic: true,
            view_link: "/ticket-details"
        }
    },
    {
        id: 8,
        ticketId: '#VLZ637',
        ticket_details: {
            id: 1,
            title: 'Omnis pariatur numquam molestiae',
            date: '18 Aug, 2016',
            priority: 'Critical',
            category: 'Design',
            year: '7 years ago',
        },
        custom_user:"Timothy L. Brodbeck (Customer)",
        assignto:{
            label1:"Self Assign",
            label2:"Other Assign"
        },
        status: "On-hold",
        statusClass: "warning",
        ticketActions: {
            logic: true,
            view_link: "/ticket-details"
        }
    },
    {
        id: 9,
        ticketId: '#VLZ638',
        ticket_details: {
            id: 1,
            title: 'Omnis pariatur numquam molestiae',
            date: '18 Aug, 2016',
            priority: 'Critical',
            category: 'Design',
            year: '7 years ago',
        },
        custom_user:"Timothy L. Brodbeck (Customer)",
        assignto:{
            label1:"Self Assign",
            label2:"Other Assign"
        },
        status: "On-hold",
        statusClass: "warning",
        ticketActions: {
            logic: true,
            view_link: "/ticket-details"
        }
    },
    {
        id: 10,
        ticketId: '#VLZ639',
        ticket_details: {
            id: 1,
            title: 'Omnis pariatur numquam molestiae',
            date: '18 Aug, 2016',
            priority: 'Critical',
            category: 'Design',
            year: '7 years ago',
        },
        custom_user:"Timothy L. Brodbeck (Customer)",
        assignto:{
            label1:"Self Assign",
            label2:"Other Assign"
        },
        status: "On-hold",
        statusClass: "warning",
        ticketActions: {
            logic: true,
            view_link: "/ticket-details"
        }
    },
];

// Overdue Tickets Data
const overdueTicketsData = [
    {
        id: 1,
        ticketId: '#VLZ631',
        ticket_details: {
            id: 1,
            title: 'Lorem Ipsum Text',
            date: '18 Aug, 2016',
            priority: 'Critical',
            category: 'Design',
            year: '7 years ago',
        },
        custom_user:"Timothy L. Brodbeck (Customer)",
        assignto:{
           label1:"Self Assign",
           label2:"Other Assign"
       },
        // assignto:[
        //     {
        //         value:'rajesh',
        //         label: 'Rajesh'
        //     },
        //     {
        //         value:'ramesh',
        //         label: 'Ramesh'
        //     },
        //     {
        //         value:'sundar',
        //         label: 'Sundar'
        //     },
        // ],
        status: "Inprogress",
        statusClass: "warning",
        ticketActions: {
            logic: true,
            view_link: "/ticket-details"
        }

    },
    {
        id: 2,
        ticketId: '#VLZ632',
        ticket_details: {
            id: 1,
            title: 'Lorem Ipsum Text',
            date: '18 Aug, 2016',
            priority: 'Medium',
            category: 'Design',
            year: '7 years ago',
        },
        custom_user:"Timothy L. Brodbeck (Customer)",
        assignto:{
            label1:"Self Assign",
            label2:"Other Assign"
        },
        status: "Inprogress",
        statusClass: "warning",
        ticketActions: {
            logic: true,
            view_link: "/ticket-details"
        }

        
    },
    {
        id: 3,
        ticketId: '#VLZ632',
        ticket_details: {
            id: 1,
            title: 'Omnis pariatur numquam molestiae',
            date: '18 Aug, 2016',
            priority: 'Low',
            category: 'Design',
            year: '7 years ago',
        },
        custom_user:"Timothy L. Brodbeck (Customer)",
        assignto:{
            label1:"Self Assign",
            label2:"Other Assign"
        },
        status: "Inprogress",
        statusClass: "warning",
        ticketActions: {
            logic: true,
            view_link: "/ticket-details"
        }
    },
    {
        id: 4,
        ticketId: '#VLZ633',
        ticket_details: {
            id: 1,
            title: 'Omnis pariatur numquam molestiae',
            date: '18 Aug, 2016',
            priority: 'High',
            category: 'Design',
            year: '7 years ago',
        },
        custom_user:"Timothy L. Brodbeck (Customer)",
        assignto:{
            label1:"Self Assign",
            label2:"Other Assign"
        },
        status: "Inprogress",
        statusClass: "warning",
        ticketActions: {
            logic: true,
            view_link: "/ticket-details"
        }
    },

    {
        id: 5,
        ticketId: '#VLZ634',
        ticket_details: {
            id: 1,
            title: 'Omnis pariatur numquam molestiae',
            date: '18 Aug, 2016',
            priority: 'Critical',
            category: 'Design',
            year: '7 years ago',
        },
        custom_user:"Timothy L. Brodbeck (Customer)",
        assignto:{
            label1:"Self Assign",
            label2:"Other Assign"
        },
        status: "Inprogress",
        statusClass: "warning",
        ticketActions: {
            logic: true,
            view_link: "/ticket-details"
        }
    },
    {
        id: 6,
        ticketId: '#VLZ635',
        ticket_details: {
            id: 1,
            title: 'Omnis pariatur numquam molestiae',
            date: '18 Aug, 2016',
            priority: 'High',
            category: 'Design',
            year: '7 years ago',
        },
        custom_user:"Timothy L. Brodbeck (Customer)",
        assignto:{
            label1:"Self Assign",
            label2:"Other Assign"
        },
        status: "Inprogress",
        statusClass: "warning",
        ticketActions: {
            logic: true,
            view_link: "/ticket-details"
        }
    },
    {
        id: 7,
        ticketId: '#VLZ636',
        ticket_details: {
            id: 1,
            title: 'Omnis pariatur numquam molestiae',
            date: '18 Aug, 2016',
            priority: 'High',
            category: 'Design',
            year: '7 years ago',
        },
        custom_user:"Timothy L. Brodbeck (Customer)",
        assignto:{
            label1:"Self Assign",
            label2:"Other Assign"
        },
        status: "Inprogress",
        statusClass: "warning",
        ticketActions: {
            logic: true,
            view_link: "/ticket-details"
        }
    },
    {
        id: 8,
        ticketId: '#VLZ637',
        ticket_details: {
            id: 1,
            title: 'Omnis pariatur numquam molestiae',
            date: '18 Aug, 2016',
            priority: 'Critical',
            category: 'Design',
            year: '7 years ago',
        },
        custom_user:"Timothy L. Brodbeck (Customer)",
        assignto:{
            label1:"Self Assign",
            label2:"Other Assign"
        },
        status: "Inprogress",
        statusClass: "warning",
        ticketActions: {
            logic: true,
            view_link: "/ticket-details"
        }
    },
    {
        id: 9,
        ticketId: '#VLZ638',
        ticket_details: {
            id: 1,
            title: 'Omnis pariatur numquam molestiae',
            date: '18 Aug, 2016',
            priority: 'Critical',
            category: 'Design',
            year: '7 years ago',
        },
        custom_user:"Timothy L. Brodbeck (Customer)",
        assignto:{
            label1:"Self Assign",
            label2:"Other Assign"
        },
        status: "Inprogress",
        statusClass: "warning",
        ticketActions: {
            logic: true,
            view_link: "/ticket-details"
        }
    },
    {
        id: 10,
        ticketId: '#VLZ639',
        ticket_details: {
            id: 1,
            title: 'Omnis pariatur numquam molestiae',
            date: '18 Aug, 2016',
            priority: 'Critical',
            category: 'Design',
            year: '7 years ago',
        },
        custom_user:"Timothy L. Brodbeck (Customer)",
        assignto:{
            label1:"Self Assign",
            label2:"Other Assign"
        },
        status: "Inprogress",
        statusClass: "warning",
        ticketActions: {
            logic: true,
            view_link: "/ticket-details"
        }
    },
];

// Assigned Tickets Data
const assignedTicketsData = [
    {
        id: 1,
        ticketId: '#VLZ631',
        ticket_details: {
            id: 1,
            title: 'Lorem Ipsum Text',
            date: '18 Aug, 2016',
            priority: 'Critical',
            category: 'Design',
            year: '7 years ago',
        },
        custom_user:"Timothy L. Brodbeck (Customer)",
        assignto:{
           label1:"Self Assign",
           label2:"Other Assign"
       },
        // assignto:[
        //     {
        //         value:'rajesh',
        //         label: 'Rajesh'
        //     },
        //     {
        //         value:'ramesh',
        //         label: 'Ramesh'
        //     },
        //     {
        //         value:'sundar',
        //         label: 'Sundar'
        //     },
        // ],
        status: "Re-open",
        statusClass: "warning",
        ticketActions: {
            logic: true,
            view_link: "/ticket-details"
        }

    },
    {
        id: 2,
        ticketId: '#VLZ632',
        ticket_details: {
            id: 1,
            title: 'Lorem Ipsum Text',
            date: '18 Aug, 2016',
            priority: 'Medium',
            category: 'Design',
            year: '7 years ago',
        },
        custom_user:"Timothy L. Brodbeck (Customer)",
        assignto:{
            label1:"Self Assign",
            label2:"Other Assign"
        },
        status: "Open",
        statusClass: "warning",
        ticketActions: {
            logic: true,
            view_link: "/ticket-details"
        }

        
    },
    {
        id: 3,
        ticketId: '#VLZ632',
        ticket_details: {
            id: 1,
            title: 'Omnis pariatur numquam molestiae',
            date: '18 Aug, 2016',
            priority: 'Low',
            category: 'Design',
            year: '7 years ago',
        },
        custom_user:"Timothy L. Brodbeck (Customer)",
        assignto:{
            label1:"Self Assign",
            label2:"Other Assign"
        },
        status: "Closed",
        statusClass: "warning",
        ticketActions: {
            logic: true,
            view_link: "/ticket-details"
        }
    },
    {
        id: 4,
        ticketId: '#VLZ633',
        ticket_details: {
            id: 1,
            title: 'Omnis pariatur numquam molestiae',
            date: '18 Aug, 2016',
            priority: 'High',
            category: 'Design',
            year: '7 years ago',
        },
        custom_user:"Timothy L. Brodbeck (Customer)",
        assignto:{
            label1:"Self Assign",
            label2:"Other Assign"
        },
        status: "Inprogress",
        statusClass: "warning",
        ticketActions: {
            logic: true,
            view_link: "/ticket-details"
        }
    },

    {
        id: 5,
        ticketId: '#VLZ634',
        ticket_details: {
            id: 1,
            title: 'Omnis pariatur numquam molestiae',
            date: '18 Aug, 2016',
            priority: 'Critical',
            category: 'Design',
            year: '7 years ago',
        },
        custom_user:"Timothy L. Brodbeck (Customer)",
        assignto:{
            label1:"Self Assign",
            label2:"Other Assign"
        },
        status: "Closed",
        statusClass: "warning",
        ticketActions: {
            logic: true,
            view_link: "/ticket-details"
        }
    },
    {
        id: 6,
        ticketId: '#VLZ635',
        ticket_details: {
            id: 1,
            title: 'Omnis pariatur numquam molestiae',
            date: '18 Aug, 2016',
            priority: 'High',
            category: 'Design',
            year: '7 years ago',
        },
        custom_user:"Timothy L. Brodbeck (Customer)",
        assignto:{
            label1:"Self Assign",
            label2:"Other Assign"
        },
        status: "Open",
        statusClass: "warning",
        ticketActions: {
            logic: true,
            view_link: "/ticket-details"
        }
    },
    {
        id: 7,
        ticketId: '#VLZ636',
        ticket_details: {
            id: 1,
            title: 'Omnis pariatur numquam molestiae',
            date: '18 Aug, 2016',
            priority: 'High',
            category: 'Design',
            year: '7 years ago',
        },
        custom_user:"Timothy L. Brodbeck (Customer)",
        assignto:{
            label1:"Self Assign",
            label2:"Other Assign"
        },
        status: "Inprogress",
        statusClass: "warning",
        ticketActions: {
            logic: true,
            view_link: "/ticket-details"
        }
    },
    {
        id: 8,
        ticketId: '#VLZ637',
        ticket_details: {
            id: 1,
            title: 'Omnis pariatur numquam molestiae',
            date: '18 Aug, 2016',
            priority: 'Critical',
            category: 'Design',
            year: '7 years ago',
        },
        custom_user:"Timothy L. Brodbeck (Customer)",
        assignto:{
            label1:"Self Assign",
            label2:"Other Assign"
        },
        status: "Closed",
        statusClass: "warning",
        ticketActions: {
            logic: true,
            view_link: "/ticket-details"
        }
    },
    {
        id: 9,
        ticketId: '#VLZ638',
        ticket_details: {
            id: 1,
            title: 'Omnis pariatur numquam molestiae',
            date: '18 Aug, 2016',
            priority: 'Critical',
            category: 'Design',
            year: '7 years ago',
        },
        custom_user:"Timothy L. Brodbeck (Customer)",
        assignto:{
            label1:"Self Assign",
            label2:"Other Assign"
        },
        status: "Inprogress",
        statusClass: "warning",
        ticketActions: {
            logic: true,
            view_link: "/ticket-details"
        }
    },
    {
        id: 10,
        ticketId: '#VLZ639',
        ticket_details: {
            id: 1,
            title: 'Omnis pariatur numquam molestiae',
            date: '18 Aug, 2016',
            priority: 'Critical',
            category: 'Design',
            year: '7 years ago',
        },
        custom_user:"Timothy L. Brodbeck (Customer)",
        assignto:{
            label1:"Self Assign",
            label2:"Other Assign"
        },
        status: "Open",
        statusClass: "warning",
        ticketActions: {
            logic: true,
            view_link: "/ticket-details"
        }
    },
];



export {recentTicketsData, globalTicketData, activeTicketsdata, closedTicketsData, onholdTicketsData, overdueTicketsData, assignedTicketsData };