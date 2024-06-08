import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
  return (
    <div className="card m-3" style={{ maxWidth: '18rem' }}>
      <img src={props.img} className="card-img-top" alt="..." style={{ height: '200px', objectFit: 'cover' }} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <a href="#" className="btn btn-primary mt-auto">{props.buttonLabel}</a>
      </div>
    </div>
  );
};

Card.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired
};

export default Card;
