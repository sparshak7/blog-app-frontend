import { Navigate, Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route path="/about" element={<div>About</div>} />
      <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
  );
};

export default AppRoutes;
