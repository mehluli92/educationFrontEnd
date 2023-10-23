import React from "react";
import { Link } from "react-router-dom";

export const Register = () => {
    return (
        <div className="container ">
        <form className="position-absolute top-50 start-50 translate-middle" style={{width: 800, padding:150}}>
                <div class="mb-2">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-2">
                    <label htmlFor="phone" className="form-label">Phone number</label>
                    <input type="phone" className="form-control" id="phone" />
                </div>
                <div class="mb-2">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="username" className="form-control" id="username"/>
                </div>
                <div class="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password"/>
                </div>
                <Link className="btn btn-primary" to="/blank">Submit</Link>
            </form>
    </div>
    )
}