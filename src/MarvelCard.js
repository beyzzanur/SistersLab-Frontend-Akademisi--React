import React from 'react';
import './MarvelCard.css' ;



const MarvelCard = ({ name , characterName , characterPicture }) => {
    return(
        <div className='marvel-card'>
            <div className='marvel-card-inner'>
                <div className='marvel-card-front'>
                    <img className = 'pictures' src = {characterPicture}/>
                </div>
                <div className='marvel-card-back'>
                    <h2>{characterName}</h2>
                    <h5>Name:{name}</h5>
                    
                </div>
            </div>
        </div>
    );
};

export default MarvelCard;


    