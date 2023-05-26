import React, {useState } from 'react';
import './MemoryCard.css';

 const MemoryCard = ({symbol,isFlipped,pickCard}) => { 

        let memoryCardInnerClass = isFlipped? "MemoryCardInner flipped" :"MemoryCardInner" ;

        return (
                <div className='MemoryCard' onClick={pickCard}>
                <div className={memoryCardInnerClass}>
                <div className='MemoryCardBack'>
                    <img src="https://www.digitalcrafts.com/media/Default/assets/logos/dc-logo-wht.svg"/>
                </div>
                <div className='MemoryCardFront'>
                    {symbol}
                </div>
                </div>
                </div>

        );
    }

export default MemoryCard;