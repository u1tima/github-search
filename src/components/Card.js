import React from 'react';
import { Link } from "react-router-dom";

const Card = () => (
  <div className="card">
    <img className='card-image-top' src={''} alt={""} />
    <div className="card-body">
      <h5 className="card-title">React JS</h5>
      <Link to={'/profile/'} className='btn btn-primary'>Открыть</Link>
    </div>
  </div>
);

export default Card;
