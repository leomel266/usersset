import { useEffect, useState } from "react";
import "./App.css";
import FormUser from "./components/FormUser";
import UserCard from "./components/UserCard";
import UseCrud from "./hooks/useCrud";

function App() {
  const [closeForm, setCloseForm] = useState(true);
  const { users, getAllUsers, createNewUser, deleteUserById, updateUserById } =
    UseCrud();
  const [updateInfo, setUpdateInfo] = useState();

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className='App'>
      <div className='App__container'>
        <h1 className='App__title'>Users</h1>
        <button onClick={() => setCloseForm(false)} className='App__btn'>
          <span className='App__span'>+</span> Open Form
        </button>
      </div>
      <div className={`form-container ${closeForm && "close__form"}`}>
        <FormUser
          createNewUser={createNewUser}
          updateInfo={updateInfo}
          updateUserById={updateUserById}
          setUpdateInfo={setUpdateInfo}
          setCloseForm={setCloseForm}
        />
      </div>
      <div className='user-container'>
        {users?.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            deleteUserById={deleteUserById}
            setUpdateInfo={setUpdateInfo}
            setCloseForm={setCloseForm}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
