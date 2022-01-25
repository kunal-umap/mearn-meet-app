import React, { useEffect, useState } from 'react';

export default function Footer(props) {
  function reload(){
    window.location.reload();
  }
  return (
    <div className='callFooter'>
        <div className="callUser">
            <input placeholder='Enter id here' type="text" value={props.inputId} onChange={(e) => props.setInputId(e.target.value)} />
            <button onClick={() => props.callUser(props.inputId)}>Call</button>
        </div>
        <div className="reciveCall">
          <h4>{props.myCallId}</h4>
          <button onClick={props.CopyToClipboard}>Copy Id</button>
        </div>
        <div className="endReload">
          <button onClick={reload}>ID Not Loded /<br />Change ID<br />Click here</button>
          {  !props.callEnded && props.callAccepted &&
            (
              <button className='endBtm' onClick={props.leaveCall}>End Call</button>
            )
          }
        </div>
    </div>
  );
}
