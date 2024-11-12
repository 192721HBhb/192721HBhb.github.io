import UserDashboard from './pages/User_Page/index';
import AdminDashboard from './pages/Master_Page/index';
import Restrurant from './pages/Restaurant_Page/index';
import LoginPage from './pages/logIn/index';
 import Test1 from './pages/User_Page/User_Message/index'
 import Test2 from './pages/User_Page/User_Order/index';
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
				path: 'test1',
				element: <Test1  />,
			},
			{
				path: 'test2',
				element: <Test2 />,
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