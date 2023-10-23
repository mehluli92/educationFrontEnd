import { Link } from 'react-router-dom';
import { SideBar } from '../admin/Sidebar';
import React from "react";
import { useEffect, useContext } from "react";
import UserContext from '../../Context/UserContext';


export const UserIndex = () => {

    const {users, getUsers, deleteUser} = useContext(UserContext);
    useEffect(() => {
        getUsers();
    }, []);

    return (

        <>
        <div className="container-fluid">
            <div className="row">
             <SideBar/> 

            <div className="col-9">
                <br /> <br />
            <Link className='btn btn-primary btn-sm' to="/users/create">
                Add User
            </Link>
            <table className="table table-striped">
                        <thead>
                            <tr>
                            <th itemScope="col">id</th>
                            <th itemScope="col">role</th>
                            <th itemScope="col">email</th>
                            <th itemScope="col">username</th>
                            <th itemScope="col">phone</th>
                            <th itemScope="col">approved classes</th>
                            <th itemScope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                           {
                            users.map((user) => {
                                return(
                                    <tr key={user.id}>
                                        <th itemScope="row">{user.id}</th>
                                        <td itemScope="col">{user.role}</td>
                                        <td itemScope="col">{user.email}</td>
                                        <td itemScope="col">{user.username}</td>
                                        <td itemScope="col">{user.phone}</td>
                                        <td itemScope="col">{user.approvedClasses}</td>
                                        <td itemScope="col">
                                            <Link to={`/users/${user.id}/edit`} className="btn btn-sm btn-secondary">Edit</Link>
                                            <button onClick={() => deleteUser(user.id)} className='btn btn-sm btn-danger'>DEL</button>
                                        </td>
                                    </tr>
                                );
                            })
                           }
                        </tbody>
        </table>
        </div>
            </div>
        </div>
        </>

        
    );
}