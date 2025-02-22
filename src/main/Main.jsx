import { Outlet } from "react-router-dom";
import Navbar from "../Home/Navbar";

const Main = () => {
    return (
        <div className="max-w-7xl mx-auto ">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;