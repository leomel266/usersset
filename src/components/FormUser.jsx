import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import "../styles/formUser.css";
import toast, { Toaster } from "react-hot-toast";

const FormUser = ({
  createNewUser,
  updateInfo,
  updateUserById,
  setUpdateInfo,
  setCloseForm,
}) => {
  const { register, reset, handleSubmit } = useForm();

  const checkToast = () => {
    toast.success("Successfully toasted!");
  };

  useEffect(() => {
    reset(updateInfo);
  }, [updateInfo]);

  console.log(updateInfo);

  const submit = (data) => {
    if (updateInfo) {
      //Update
      updateUserById(updateInfo.id, data);
      setUpdateInfo();
      checkToast();
    } else {
      //Create
      createNewUser(data);
    }
    setCloseForm(true);
    reset({
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      birthday: "",
    });
  };

  return (
    <form className='form' onSubmit={handleSubmit(submit)}>
      <div onClick={() => setCloseForm(true)} className='form__x'>
        x
      </div>
      <h2 className='form__title'>
        {updateInfo ? "Update User" : "Create User"}
      </h2>
      <div className='form__div'>
        <i class='fa-solid fa-envelope form__item'></i>
        <input
          className='form__input'
          type='email'
          id='email'
          {...register("email")}
          placeholder='Email'
        />
      </div>
      <div className='form__div'>
        <i class='fa-solid fa-lock form__item'></i>
        <input
          className='form__input'
          type='password'
          id='password'
          {...register("password")}
          placeholder='Password'
        />
      </div>
      <div className='form__div'>
        <i class='fa-solid fa-user form__item'></i>
        <input
          className='form__input'
          type='text'
          id='first_name'
          {...register("first_name")}
          placeholder='Firts Name'
        />
      </div>
      <div className='form__div'>
        <i class='fa-regular fa-user form__item'></i>
        <input
          className='form__input'
          type='text'
          id='last_name'
          {...register("last_name")}
          placeholder='Last Name'
        />
      </div>
      <div className='form__div'>
        <i class='fa-solid fa-cake-candles form__item'></i>
        <input
          className='form__input'
          type='date'
          id='birthday'
          {...register("birthday")}
          placeholder='Birthday'
        />
      </div>
      <button className='form__btn'>
        {updateInfo ? "Update" : "Create user"}
      </button>
      <Toaster position='top-center' reverseOrder={false} />
    </form>
  );
};

export default FormUser;
