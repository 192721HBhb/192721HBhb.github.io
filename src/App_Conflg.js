import UserDashboard from './pages/User_Page/index';
import AdminDashboard from './pages/Master_Page/index';
import Restrurant from './pages/Restaurant_Page/index';
import LoginPage from './pages/logIn/index';
 import UserMessage from './pages/User_Page/User_Message/index'
 import UserOrder from './pages/User_Page/User_Order/index';
 import UserFirst from './pages/User_Page/User_firtstPage/index'
 import UserTakeOutOrdering from './pages/User_Page/User_Food/index'

export const route = [
	{
		path: '/admin-dashboard',
		element: <AdminDashboard />,
		
	},
    {
		path: '/user-dashboard',
		element: <UserDashboard />,
        children: [
			{
				path: 'user_first',
				element: <UserFirst  />,
			},
			{
				path: 'user_message',
				element: <UserMessage />,
			},
			{
				path: 'user_takeoutOrdering',
				element: <UserTakeOutOrdering />,
			},
			{
				path: 'user_orderManagement',
				element: <UserOrder />,
			},
		],
    },
    {
        path: '/restaurant-dashboard',
		element: <Restrurant />,
    },
    {
		path: '/',
		element: <LoginPage />,
    }

];