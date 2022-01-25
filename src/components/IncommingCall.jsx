import React from 'react';

export const IncommingCall = (props) => {
  return (
    <div className='callDropbox'>
        <h2><span>{props.callerName}</span> want to join call</h2>
        <div className="accept">
            <button onClick={props.acceptCall} > Admit {props.callerName}</button>
        </div>
    </div>
  );
};
