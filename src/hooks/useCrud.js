import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const UseCrud = () => {
  const [users, setUsers] = useState();

  const checkUpdate = () => {
    toast.success("Successfully Update!");
  };

  const checkDelateUser = () => {
    toast.success("Successfully Deleted!");
  };

  const checkCreateUser = () => {
    toast.success("Successfully Created!");
  };

  const checkError = () => {
    toast.error("Something went wrong.");
  };

  const getAllUsers = () => {
    const URL = "https://users-crud.academlo.tech/users/";
    axios
      .get(URL)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  };

  const deleteUserById = (id) => {
    const URL = `https://users-crud.academlo.tech/users/${id}/`;
    axios
      .delete(URL)
      .then(() => {
        getAllUsers();
        checkDelateUser();
      })
      .catch((err) => {
        console.log(err);
        checkError();
      });
  };

  const createNewUser = (data) => {
    const URL = "https://users-crud.academlo.tech/users/";

    axios
      .post(URL, data)
      .then(() => {
        getAllUsers();
        checkCreateUser();
      })
      .catch((err) => {
        console.log(err);
        checkError();
      });
  };

  const updateUserById = (id, data) => {
    const URL = `https://users-crud.academlo.tech/users/${id}/`;

    axios
      .put(URL, data)
      .then((res) => {
        getAllUsers();
        checkUpdate();
      })
      .catch((err) => {
        console.log(err);
        checkError();
      });
  };

  return {
    users,
    createNewUser,
    getAllUsers,
    deleteUserById,
    updateUserById,
  };
};

export default UseCrud;
