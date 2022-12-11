import React from "react";
import "../styles/userCard.css";

const UserCard = ({ user, deleteUserById, setUpdateInfo, setCloseForm }) => {
  const handleEdit = () => {
    setUpdateInfo(user);
    setCloseForm(false);
  };
  return (
    <article className='card'>
      <h3 className='card__title'>
        {user.first_name} {user.last_name}
      </h3>
      <ul className='card__body'>
        <li className='card__item'>
          <span className='card__span'>Email</span>
          <p>
            <i className='fa-solid fa-envelope form__item'></i>
            {user.email}
          </p>
        </li>
        <li className='card__item'>
          <span className='card__span'>Birthday</span>
          <p>
            <i className='fa-solid fa-cake-candles form__item'></i>
            {user.birthday}
          </p>
        </li>
      </ul>
      <footer className='card__footer'>
        <button
          className='card__btn card__btn__trash'
          onClick={() => deleteUserById(user.id)}>
          <i className='fa-solid fa-trash-can'></i>
        </button>
        <button className='card__btn card__btn__edit' onClick={handleEdit}>
          <i className='fa-solid fa-pen-to-square'></i>
        </button>
      </footer>
    </article>
  );
};

export default UserCard;
