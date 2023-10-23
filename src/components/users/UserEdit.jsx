import React, { useContext, useEffect } from "react";
import UserContext from "../../Context/UserContext";
import { useParams } from "react-router-dom";
import { SideBar } from "../admin/Sidebar";

export const UserEdit = () => {
    const {formValues, onChange, updateUser, getUser } = useContext(UserContext);
    let {id} = useParams();

    useEffect(()=>{
        getUser(id);
    }, []);
    return (
        <div className="container-fluid">
            <div className="row">
                <SideBar/>
                <div className="col-9">
                    <br/><br/>
                <div className="">
            <div className="card-body">
                <h3 className="card-title">Update User</h3>
                <form onSubmit={updateUser}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input name="email" value={formValues["email"]} onChange={onChange} type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                    <select name="role" value={formValues["role"]} onChange={onChange} className="form-select" aria-label="Default select example">
                        <option selected>Select Role</option>
                        <option value="admin">Admin</option>
                        <option value="teacher">Teacher</option>
                        <option value="student">Student</option>
                    </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone Number</label>
                        <input name="phone" value={formValues["phone"]} onChange={onChange} type="text" className="form-control" id="phone"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input name="password" value={formValues["password"]} onChange={onChange} type="password" className="form-control" id="password"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input name="username" value={formValues["username"]} onChange={onChange} type="username" className="form-control" id="username"/>
                    </div>
                    <div className="form-check">
                    <input name="approved" value={formValues["approved"]} className="form-check-input" type="checkbox"  id="approved"/>
                    <label className="form-check-label" htmlFor="approved">
                        Approve
                    </label>
                    </div>
                    <div className="form-check">
                    <input name="confirmed" value={formValues["confirmed"]}  className="form-check-input" type="checkbox"  id="confirmed"/>
                    <label className="form-check-label" htmlFor="confirmed">
                        Confirmed
                    </label>
                    </div>
                    <button className="btn btn-primary">
                        Update
                    </button>
                </form>
            </div>
        </div>
                </div>
            </div>
    </div>
    )
}