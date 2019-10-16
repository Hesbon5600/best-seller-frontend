import CustomerProfile from '../../components/CustomerProfile';
import roles from '../../config/roles';

const CustomerConfig = {
    // settings: {
    //     layout: {
    //         style: 'main'
    //     }
    // },
    auth    : roles.user,
    name: 'Customer',
    routes  : [
        {
            path     : '/customers',
            component: CustomerProfile
        }
    ]
};

export default CustomerConfig;