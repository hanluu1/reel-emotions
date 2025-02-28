import React from 'react';
const Card = (props) => {
    return (
        <div className="card">
            <img src={props.src} alt="movie"  className="card-img"/>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <a href={props.link} className='card-button'>For More</a>
        </div>
    );
}
export default Card;