import Home from '../pages/Home/Home';
import Blog from '../pages/Blog/Blog';
import About from '../pages/About/About';
import Config from '../pages/Config/Config';
import FirstPage from '../pages/firstPage/index'

export const route = [
  {
    path: 'home',
    element: <Home />,
    name: "Home",
    nav: true
  },
  {
    path: "blog",
    name: "Blog",
    element: <Blog />,
    nav: true
  },
  {
    path: "about",
    name: "About",
    element: <About />,
    nav: true
  },
  {
    path: "config",
    name: "实验",
    element: <Config />,
    nav: true,
    mobileHidden: true
  }
];


export const routes = [
  {
    path: '/',
    element: <FirstPage />,
    children:route
  }, 
]

  