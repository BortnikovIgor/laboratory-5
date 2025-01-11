import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyCard = () => {
  return (
    <div className="card" style={{ width: '18rem', margin: '1rem auto' }}>
      <img
        src="https://via.placeholder.com/150"
        className="card-img-top"
        alt="placeholder"
      />
      <div className="card-body">
        <h5 className="card-title">Заголовок карточки</h5>
        <p className="card-text">
        </p>
        <a href="#" className="btn btn-primary">
          Нажми меня
        </a>
      </div>
    </div>
  );
};

export default MyCard;
