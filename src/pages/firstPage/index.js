import { BrowserRouter as Router, Routes, Route, Link,Outlet } from 'react-router-dom';
import {route} from '../../config/routes';
import './index.css';
const App = () => {
  return (
    
      <div className="app-container">
        {/* 响应式导航栏 */}
        <nav className="cyber-nav">
          {route.filter(r => r.nav).map((route) => (
            <Link 
              key={route.path}
              to={route.path}
              className={`nav-link ${route.mobileHidden ? 'hide-on-mobile' : ''}`}
            >
              {route.name}
            </Link>
          ))}
        </nav>

       
       <div>
       <Outlet />
       </div>
      </div>
    
  );
};

// 导出 App 组件
export default App;