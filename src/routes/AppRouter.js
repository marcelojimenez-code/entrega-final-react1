import { Route, Routes } from "react-router-dom"
import Layout from "../Components/Layout/Layout"
import { routes } from "./routes"
import Dashboard from "../Components/pages/dashboard/Dashboard"
import ProtectedRoutes from "./ProtectedRoutes"

const AppRouter = () => {
  return (
    <Routes>
    <Route element={<Layout />}>
        {routes.map(({id,path,Element})=>(
        <Route key={id} path={path} element={<Element />} />))}
    </Route>
    <Route element={<ProtectedRoutes />}>
      <Route path="dashboard" element={<Dashboard/>} />
    </Route>
    <Route path="*" element={<h1>404 not found</h1>} />
  </Routes>
  )
}

export default AppRouter