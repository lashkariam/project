import React from 'react';
import classes from './ResultItem.module.css';

const ResultItem = ({resultItem}) => {
  return (
    <div className={classes.card}>
      <div className={classes['card__info']}>
          <h5>{resultItem['web_displayed_link'][0]}</h5>
          <a href={resultItem.web_link}>{resultItem.title}</a>
          <p>{resultItem.description}</p>
      </div>

      <div className={classes['card__img']}>
          <img src={resultItem.thumbnail} alt="" />
      </div>
    </div>
  )
}

export default ResultItem


{/* <div className={classes.card}>
<div>
    <h5>https://en.mfa.ir</h5>
    <a href='#'>Ministry of Foreign Affairs of the Islamic Republic of Iran</a>
    <p>Iranian Foreign Ministry Spokesman Nasser Kanaani has offered condolences to the government and people of Iraq on the fuel tanker blast incident in Baghdad that ...</p>
</div>

<div>
    <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRffup_nowVc400_RZjUikSuQFnFobmoNd3JMFNzswp1qB8sgmqW-u&usqp=CAE&s" alt="" />
</div>
</div> */}