import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import AuthCallback from "../pages/AuthCallback";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Layout>About</Layout>} />
      <Route path="*" element={<Navigate to="/"/>}/>
      <Route path="auth-callback" element={<AuthCallback />} />
    </Routes>
  );
};

export default AppRoutes;
