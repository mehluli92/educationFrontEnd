import {createContext, useState} from "react";
import axios from "axios";
// import {useNavigate} from "react-router-dom";

const ProfileContext = createContext;

const authUser = {
    "id": "",
    "role": "",
    "email": "",
    "phone": "",
    "password":"",
    "approved": "",
    "username": "",
    "confirmed": "",
    "profile": {
        "userId": "",
        "name": " ",
        "surname": " ",
        "sex": " ",
        "school": " ",
        "exam_board": " ",
        "address1": " ",
        "address2": " ",
        "city": " ",
    }

}

export const ProfileProvider = ({children}) => {
    const [authUser, setAuthUser] = useState({
        "id": "",
        "role": "",
        "email": "",
        "phone": "",
        "password":"",
        "approved": "",
        "username": "",
        "confirmed": "",
        "profile": {
            "userId": "",
            "name": " ",
            "surname": " ",
            "sex": " ",
            "school": " ",
            "exam_board": " ",
            "address1": " ",
            "address2": " ",
            "city": " ",
        }
    });

    const getUser = async (id) => {
        const response = await axios.get("http://localhost:9191/user/getUser/" + id);
        const user = response.data;
        console.log(user);
        setAuthUser({
            id: user.id,
            role: user.role,
            email: user.email,
            phone: user.phone,
            password: user.password,
            approved: user.approved,
            username: user.username,
            confirmed: user.confirmed,
            profile: {
                userId: user.profile.userId,
                name: user.profile.name,
                surname: user.profile.surname,
                sex: user.profile.sex,
                school: user.profile.school,
                exam_board: user.profile.exam_board,
                address1: user.profile.address1,
                address2: user.profile.address2,
            }

        });
        
    }

    return <ProfileContext.Provider value={{
        authUser,
        getUser,
        }}>
            {children}
        </ProfileContext.Provider>
}

export default ProfileContext;

