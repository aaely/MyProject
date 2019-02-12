export default [
    { label: 'Vendor', name: 'vendor' , noValueError: 'You must provide a Vendor', type: 'text', placeholder: 'Vendor' },
    { label: 'Technician Name', name: 'name', noValueError: 'You must provide a value', type: 'text', placeholder: 'John Smith'},
    { label: 'Technician Email', name: 'email', noValueError: 'You must provide a value', type: 'email', placeholder: 'John@Smith.com separate with \',\' for multiple'},
    { label: 'Application Name', name: 'app', noValueError: 'You must provide a value', type: 'text', placeholder: 'Micros' },
    { label: 'Vendor Ticket #', name: 'vendorTicket', noValueError: 'You must provide a value', type: 'text', placeholder: '123456'},
    { label: 'Reason for Entry', name: 'reason', noValueError: 'You must provide a value', type: 'text', placeholder: 'Menu item changes', value: '123'}
];