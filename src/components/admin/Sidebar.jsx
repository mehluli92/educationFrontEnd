// import React, {useContext, useEffect} from "react";
// import UserContext from "../../Context/UserContext";
import React from 'react';
import './Sidebar.css';


export const SideBar = () =>{
    // const { getAuthUser, authUser} = useContext(UserContext);
    // let id = 37;

    // useEffect(()=>{
    //    getAuthUser(id);
    // }, []);

    return(
        <>
        <div className="col-auto col-md-2 col-xl-2 px-sm-2 px-0 bg-white">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-dark min-vh-100">
                <a href="/dashboard" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <span className="fs-4 d-none d-sm-inline">Dashboard</span>
                </a>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li className="nav-item">
                        <a href="/" className="nav-link align-middle px-0 text-reset">
                        <i class="material-icons">apps</i> <span className="ms-1 d-none d-sm-inline">Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle text-reset">
                        <i class="material-icons">people_outline</i> <span className="ms-1 d-none d-sm-inline">Users</span> </a>
                        <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                            <li className="w-100">
                                <a href="/users" className="nav-link px-0 text-reset"> <span className="d-none d-sm-inline">All</span>
                                <i class="material-icons">list</i>
                                 </a>
                            </li>
                            <li>
                                <a href="/users/create" className="nav-link px-0 text-reset"> <span className="d-none d-sm-inline">Add</span>
                                <i class="material-icons">add</i>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" className="nav-link px-0 align-middle text-reset">
                        <i class="material-icons">subdirectory_arrow_right</i> <span className="ms-1 d-none d-sm-inline">Marks</span></a>
                    </li>
                    <li>
                        <a href="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle text-reset">
                        <i class="material-icons">border_color</i> <span className="ms-1 d-none d-sm-inline">Assignments</span></a>
                        <ul className="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                            <li className="w-100">
                                <a href="#" className="nav-link px-0 text-reset"> <span className="d-none d-sm-inline">Item</span> 1</a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0 text-reset"> <span className="d-none d-sm-inline">Item</span> 2</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#submenu3" data-bs-toggle="collapse" className="nav-link px-0 align-middle text-reset">
                            <i class="material-icons">folder</i> <span className="ms-1 d-none d-sm-inline">Classes</span> </a>
                            <ul className="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                            <li className="w-100">
                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Class</span> 1</a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Class</span> 2</a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Class</span> 3</a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Class</span> 4</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" class="nav-link px-0 align-middle text-reset">
                        <i class="material-icons">title</i> <span class="ms-1 d-none d-sm-inline">Tests</span> </a>
                    </li>
                </ul>
                
                <div class="dropdown pb-4">
                    <a href="#" class="d-flex align-items-center text-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" class="rounded-circle"/>
                        <span class="d-none d-sm-inline mx-1">Mehluli</span>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
                        <li><a class="dropdown-item" href="#">New project...</a></li>
                        <li><a class="dropdown-item" href="#">Settings</a></li>
                        <li><a class="dropdown-item" href="/profile">Profile</a></li>
                        <li>
                            <hr class="dropdown-divider"/>
                        </li>
                        <li><a class="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col py-3">
        </div>
        </>
    );
}