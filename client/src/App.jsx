import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import LoginOptionPage from "./pages/LoginOptionPage";
import LoginRegisterPage from "./pages/LoginRegisterPage";
import NotFound from "./pages/NotFound";
import { useState } from "react";
import DashBoardPage from "./pages/DashBoardPage";
function App() {
  const [authMode, setAuthMode] = useState('login');
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<LoginOptionPage setAuthMode={setAuthMode}/>} />
        <Route path="login" element={<LoginRegisterPage authMode={ authMode } setAuthMode={setAuthMode}/>} />
        <Route path="register" element={<LoginRegisterPage authMode={authMode} setAuthMode={setAuthMode} />} />
        <Route path="register/success" element={<LoginRegisterPage success={true} />} />
        <Route path="dashboard" element={ <DashBoardPage /> } />
        <Route path="*" element={ <NotFound /> } />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
