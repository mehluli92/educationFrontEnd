import React from "react";
import { SideBar } from "./Sidebar";
import { useContext, useEffect } from "react";
import ProfileContext from "../../Context/ProfileContext";

export const Profile = () =>{
    const {authUser, getUser} = useContext(ProfileContext);
    let id = 36;

    useEffect(()=>{
        getUser(id);
    }, []);

    return(
        <>
        
        <div className="container-fluid">
            <div className="row">
                <SideBar/>
                <div className="col-xl-9 col-md-9 col-sm-3">
                    <br/><br/>
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a className="nav-link text-reset active" aria-current="page" href="#profile" data-bs-toggle="tab">
                                <h5>User Profile</h5>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-reset" href="#classes" data-bs-toggle="tab">
                                <h5>Approved Classes</h5>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-reset" href="#pending" data-bs-toggle="tab">
                                <h5>Pending Work</h5>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">
                                <h5>Disabled</h5>
                            </a>
                        </li>
                    </ul>
                    <div class="tab-content">
                        <div class="tab-pane fade show active" id="profile">
                            <br />
                            <div className="row">
                            <p className="col-2 border-end border-primary border-4">
                            <img src="https://github.com/mdo.png" alt="hugenerd" width="100" height="100" class="rounded-circle"/>
                            </p>
                            {authUser.name}
                            <p className="col-4">
                                <h6>Name:</h6> Mehluli Nokwara <br />
                                <h6>Sex:</h6> Male <br />
                                <h6>School:</h6>Loreto High School <br />
                                <h6>Exam board:</h6> ZIMSEC <br />
                                <h6>Address</h6> 389/9, Mbizo, Kwekwe <br />

                            </p>
                            <p className="col-1">
                            <i class="material-icons">&#xe150;</i>
                            </p>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="classes">
                            <p>Approved classes tab content ...</p>
                        </div>
                        <div class="tab-pane fade" id="pending">
                            <p>Pending work ...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}