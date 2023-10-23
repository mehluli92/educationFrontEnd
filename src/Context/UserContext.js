import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
axios.defaults.baseURL = "http://localhost:9191/user/";

const UserContext  = createContext();

const initialForm = {
    id: "",
    role: "",
    email: "",
    phone: "",
    password: "",
    approved: "",
    username: "",
    confirmed: "",
}

const authUser = {
    username: "",
    email: "",
}

export const UserProvider = ({children}) => {
    const [formValues, setFormValues] = useState({
        id: "",
        role: "",
        email: "",
        phone: "",
        password: "",
        approved: "",
        username: "",
        confirmed: "",
    });

    const [users, setUsers] = useState([]);
    const [authUser, setAuthUser] = useState({
        username: "place_holder",
        email: "email@email.com",
    });
    
    const [user, setUser] = useState([]);
    const [errors, setErros] = useState({});
    const navigate = useNavigate();


    const getUsers = async () =>{
        let url = "getUsers";
        const apiUsers = await axios.get(url);
        setUsers(apiUsers.data);
    }

    const getAuthUser = async (id) =>{
        const response = await axios.get("getUser/" + id);
        const authUser = response.data;
        setAuthUser({
            username: authUser.username,
            email: authUser.email,
        });
    }

    const getUser = async (id) => {
        const response = await axios.get("getUser/" + id);
        const apiUser = response.data;
        setUser(apiUser);
        setFormValues({
            email: apiUser.email,
            username: apiUser.username,
            phone: apiUser.phone,
            password: apiUser.password,
            role: apiUser.role,
            approved: apiUser.approved,
            confirmed: apiUser.confirmed
        });
    }

    const onChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value});
    };

    const storeUser = async (e) => {
        e.preventDefault();
        try {
            await axios.post("/addUser", formValues);
            setFormValues(initialForm);
            navigate("/users");
        } catch (e) {
            if(e.response.status === 500){
                setErros(e.response.data.errors);
            }
        }
    }

    const updateUser = async (e) => {
        e.preventDefault();
        try {
            formValues.id = user.id;
            await axios.put("updateUser", formValues);
            setFormValues(initialForm);
            navigate("/users");
        } catch (e) { 
            if (e.response.status === 422) {
                setErros(e.response.data.errors);
            }
        }
    }

    const deleteUser = async (id) => {
        await axios.delete("deleteUser/" + id);
        getUsers();
    }

    return <UserContext.Provider value={{
        user,
        users, 
        getUser,
        getUsers, 
        onChange, 
        formValues, 
        storeUser,
        updateUser,
        deleteUser,
        errors,
        }}>
            {children}
        </UserContext.Provider>
}

export default UserContext;