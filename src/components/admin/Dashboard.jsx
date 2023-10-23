import React from "react";
import { SideBar } from "./Sidebar";

export const Dashboard = () =>{
    return(
        <>
        <div className="container-fluid">
            <div className="row">
            <SideBar/>
            
            <div className="col-xl-9 col-md-9 col-sm-6">
                <p className="text-center fs-3 fw-bolder">Dashboard</p>
            </div>
            </div>
        </div>
            
        </>
    );
}