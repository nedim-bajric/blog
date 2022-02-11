import Home from "./containers/pages/Home";
import Login from "./containers/pages/Login";
import Register from "./containers/pages/Register";
const routes = [
  { path: "/home", element: Home },
  { path: "/register", element: Register },
  { path: "/", element: Login },
];
export default routes;
