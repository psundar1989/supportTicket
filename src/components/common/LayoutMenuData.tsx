import React from 'react'

const LayoutMenuData = () => {

const updateIconSidebar=(e: any) =>{
    if (e && e.target) {
        const target = e.currentTarget as HTMLElement;
        const ariaExpanded = target.getAttribute('aria-expanded') === 'true';

        // Toggle the aria-expanded attribute
        target.setAttribute('aria-expanded', ariaExpanded ? 'false' : 'true');

        // Add or remove the 'show' class based on the aria-expanded value
        if (ariaExpanded) {
            target.nextElementSibling?.classList.remove('show');
        } else {
            target.nextElementSibling?.classList.add('show');
        }

        const otherLinks = document.querySelectorAll('.nav-link.menu-link');
        if (otherLinks.length > 1) { 
          otherLinks.forEach((link) => {
            if (link !== target) {
              link.setAttribute('aria-expanded', 'false');
              link.nextElementSibling?.classList.remove('show');
            }
          });
        }
    }
	}

    const menuItems: any = [
        {
            label: 'Menu',
            isHeader: true,
        },
        {
            id: 'Dashboard',
            label: 'Dashboard',
            icon: 'ri-dashboard-2-line',
            link: '/',
            click: function (e: any) {
                updateIconSidebar(e);
            },
        },
        {
            id: 'ticket',
            label: 'Global Tickets',
            icon: 'ri-coupon-fill',
            click: function (e: any) {
                e.preventDefault();
                updateIconSidebar(e);
            },
            subItems: [
                {
                    id: 'recenttickets',
                    label: 'Recent Tickets',
                    link: '/recent-tickets',
                    parentId: 'ticket',
                },
                {
                    id: 'total_tickets',
                    label: 'Total Tickets',
                    link: '/total-tickets',
                    parentId: 'ticket',
                },
                {
                    id: 'active_tickets',
                    label: 'Active Tickets',
                    link: '/active-tickets',
                    parentId: 'ticket',
                },
    
                {
                    id: 'closed_tickets',
                    label: 'Closed Tickets',
                    link: '/closed-tickets',
                    parentId: 'ticket',
                },
                {
                    id: 'onhold_tickets',
                    label: 'On-hold Tickets',
                    link: '/on-hold-tickets',
                    parentId: 'ticket',
                },
                {
                    id: 'overdue_tickets',
                    label: 'Overdue Tickets',
                    link: '/overdue-tickets',
                    parentId: 'ticket',
                },
                {
                    id: 'assigned_tickets',
                    label: 'Assigned Tickets',
                    link: '/assigned-tickets',
                    parentId: 'ticket',
                },
                {
                    id: 'unassigned_tickets',
                    label: 'Unassigned Tickets',
                    link: '/unassigned-tickets',
                    parentId: 'ticket',
                },
            ],
        },
        {
            id: 'selfticket',
            label: 'Self Tickets',
            icon: 'ri-ticket-2-line',
            click: function (e: any) {
                e.preventDefault();
                updateIconSidebar(e);
            },
            subItems: [
                {
                    id: 'self_assigned',
                    label: 'Self Assigned Tickets',
                    link: '/self-assigned-tickets',
                    parentId: 'selfticket',
                },
                {
                    id: 'my_assigned_tickets',
                    label: 'My Assigned Tickets',
                    link: '/my-assigned-tickets',
                    parentId: 'selfticket',
                },
                {
                    id: 'closed_tickets',
                    label: 'Closed Tickets',
                    link: '/self-closed-tickets',
                    parentId: 'selfticket',
                },
    
            ],
        },
        {
            id: 'trash',
            label: 'Trashed Tickets',
            icon: 'ri-archive-fill',
            link: '/trashed-tickets',
            click: function (e: any) {
                updateIconSidebar(e);
            },
        },
        {
            id: 'department',
            label: 'Department',
            icon: 'ri-building-3-fill',
            link: '/department',
            click: function (e: any) {
                updateIconSidebar(e);
            },
        },
        {
            id: 'category',
            label: 'Category',
            icon: ' ri-layout-grid-fill',
            link: '/category',
            click: function (e: any) {
                updateIconSidebar(e);
            },
        },
        {
            id: 'knowledge',
            label: 'Knowledge',
            icon: 'ri-lightbulb-flash-line',
            click: function (e: any) {
                e.preventDefault();
                updateIconSidebar(e);
            },
            subItems: [
                {
                    id: 'article',
                    label: 'Article',
                    link: '/knowledge-article',
                    parentId: 'knowledge',
                },
            ]
        },
        {
            id: 'notification',
            label: 'Notification',
            icon: 'ri-notification-fill',
            click: function (e: any) {
                e.preventDefault();
                updateIconSidebar(e);
            },
            subItems: [
                {
                    id: 'All_Notification',
                    label: 'All Notification',
                    link: '/notification',
                    parentId: 'notification',
                },
            ],
        },
        {
            id: 'announcement',
            label: 'Announcement',
            icon: 'ri-volume-down-fill',
            link: '/announcement',
            click: function (e: any) {
                updateIconSidebar(e);
            },
        },
        {
            id: 'others',
            label: 'Others',
            icon: 'ri-boxing-fill',
            click: function (e: any) {
                e.preventDefault();
                updateIconSidebar(e);
            },
            subItems: [
                {
                    id: 'chat',
                    label: 'Chat',
                    link: '/apps-chat',
                    parentId: 'others',
                },
                {
                    id: 'mail',
                    label: 'Mail',
                    link: '/apps-mailbox',
                    parentId: 'others',
                },
            ],
        },
        {
            id: 'appsetting',
            label: 'Settings',
            icon: 'ri-boxing-fill',
            click: function (e: any) {
                e.preventDefault();
                updateIconSidebar(e);
            },
            subItems: [
                {
                    id: 'ticketsetting',
                    label: 'Ticket Setting',
                    link: '/ticket-setting',
                    parentId: 'appsetting',
                },
                {
                    id: 'emailtemplate',
                    label: 'Email Templates',
                    link: '/email-templates',
                    parentId: 'appsetting',
                },
            ],
        },
    ];
    return <React.Fragment>{menuItems}</React.Fragment>;
}

export default LayoutMenuData;