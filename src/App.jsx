import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import MainProtectedLayout, { loader as protector } from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";
import Reflection from "./pages/Dashboard/Reflection";
import Post from "./pages/Dashboard/Post";
import Home from "./pages/Dashboard/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<LandingPage />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Register />} />
      <Route element={<MainProtectedLayout />} loader={protector}>
        <Route path="home" element={<Home />} />
        <Route path="reflection" element={<Reflection />} />
        <Route path="post" element={<Post />} />
      </Route>
      {/* <Route path="*" element={<NotFound />} /> */}
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
