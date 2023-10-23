import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './components/Home';
import { UserIndex } from './components/users/UserIndex';
import { UserCreate } from './components/users/UserCreate';
import { UserEdit } from './components/users/UserEdit';
import ProfileProvider  from './Context/ProfileContext';
import { UserProvider } from "./Context/UserContext";
import { Login } from './components/users/auth/Login';
import { Register } from './components/users/auth/Register';
import { Blank } from './components/users/auth/Blank';
import { Dashboard } from './components/admin/Dashboard';
import { Profile } from './components/admin/Profile';

function App() {
  return (
    <UserProvider>
      <ProfileProvider>
        <div className='container-fluid'>
        
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/users" element={<UserIndex/>} />
            <Route path="/users/create" element={<UserCreate/>} />
            <Route path="/users/:id/edit" element={<UserEdit/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/blank" element={<Blank/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/profile" element={<Profile/>} />
          </Routes>
        </div>
      </ProfileProvider>
    </UserProvider>
  );
}

export default App;
