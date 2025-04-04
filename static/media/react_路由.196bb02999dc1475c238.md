流程：

##  1，改变路径

如

---



```jsx
<NavLink
	to="/about"
>
	首页
</NavLink>

```

```jsx
<Link to={{ pathname: '/about', search: '?name=zhangsan' }} state={{ some: 'value' }}>
	关于我们
</Link>
```

```jsx
const handleLogin = () => {
    // 这里可以添加实际的登录逻辑，比如发送请求到后端进行验证
    if (role === 'admin') {
      navigate('/admin-dashboard');
    } else {
      navigate('/user-dashboard');
    }
  };
```

## 2，将路径对应的组件渲染

```jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/logIn/index';
import UserDashboard from './pages/User_Page/index';
import AdminDashboard from './pages/Master_Page/index';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
```

## 3，将路由渲染到指定的地方

```jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/logIn/index';
import UserDashboard from './pages/User_Page/index';
import AdminDashboard from './pages/Master_Page/index';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
```

## 4，创建对应路由的显示部分,跟react组件一样:red_circle:	

​	

如创建user页面

```jsx
import React from 'react';

const UserDashboard = () => {
  return <div>User Dashboard</div>;
};

export default UserDashboard;
```
