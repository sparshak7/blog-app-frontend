import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../layouts/Layout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout>Home</Layout>} />
      <Route path="/about" element={<Layout>About</Layout>} />
      <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
  );
};

export default AppRoutes;
