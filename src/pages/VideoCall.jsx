import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Peer from 'simple-peer';
import { io } from 'socket.io-client';
import Footer from '../components/Footer';
import { IncommingCall } from '../components/IncommingCall';

const socket = io('https://meet-app-prj.herokuapp.com/');
// const socket = io('http://localhost:4000');

export default function VideoCall() {
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  // const [isPresenting, SetisPresenting] = useState(false);
  const [stream, setStream] = useState();
  const [name, setName] = useState('');
  const [call, setCall] = useState({});
  const [me, setMe] = useState('');
  const [idToCall, setIdToCall] = useState('');
  const [orName,setOrName] = useState('');
  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();

  const navigate = useNavigate();
  const route = () => {
      const key = localStorage.getItem('user-authentication-token');
      return key? true:false;
  }
  useEffect(()=>{
      if(!route()){
          navigate('/login');
      }
  },[route,navigate]);
  
  useEffect(() => {
    setName(localStorage.getItem('user'));
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((currentStream) => {
        setStream(currentStream);

        myVideo.current.srcObject = currentStream;
      });
      socket.on('me', (id) =>{ 
        setMe(id)
      });
    socket.on('callUser', ({ from, name: callerName, signal }) => {

      setCall({ isReceivingCall: true, from, name: callerName, signal });
    });
  }, []);

  function CopyToClipboard(){

    navigator.clipboard.writeText(me);
  }
  const answerCall = () => {
    setCallAccepted(true);

    const peer = new Peer({ initiator: false, trickle: false, stream });

    peer.on('signal', (data) => {
      socket.emit('answerCall', { signal: data, to: call.from,name });
    });

    peer.on('stream', (currentStream) => {
      // console.log("Stream Started");
      userVideo.current.srcObject = currentStream;
    });

    peer.signal(call.signal);

    connectionRef.current = peer;
  };

  const callUser = (id) => {
    const peer = new Peer({ initiator: true, trickle: false, stream });

    peer.on('signal', (data) => {
      socket.emit('callUser', { userToCall: id, signalData: data, from: me, name });
    });

    peer.on('stream', (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });

    socket.on('callAccepted', (data) => {
      setCallAccepted(true);
      setOrName(data.name)
      peer.signal(data.signal);
    });

    connectionRef.current = peer;
  };

  
  const screenShare = () => {
    navigate('/');
  };
  // const stopScreenShare = () => {
    
  // };
  const leaveCall = () => {
    setCallEnded(true);
    connectionRef.current.destroy();
    window.location.reload();
  };


  return (
    <div className='VideoCallPageContainer'>

      <div className="videoContainer">
        {
          stream && 
          (
            <div className='vdoItem'>
              <h2>{name}</h2>
              <video playsInline={true} controls muted ref={myVideo} autoPlay>hgvchejwv</video>
            </div>
          )
        }
        {
          callAccepted && !callEnded && 
          (
          <div className='vdoItem'>
            <h2>{call.name || orName}</h2>
            <video playsInline={true} controls ref={userVideo} autoPlay></video>
          </div>
          )
        }
      </div>
      <div className="controls">
        <Footer 
          inputId={idToCall}
          setInputId={setIdToCall}
          callUser={callUser}
          myCallId={me}
          CopyToClipboard={CopyToClipboard}
          leaveCall={leaveCall}
          callAccepted={callAccepted}
          callEnded={callEnded}
          screenShare={screenShare}
          setMe={setMe}
          socket={socket}
        />
        {
          call.isReceivingCall && !callAccepted &&
          (
            <IncommingCall 
            callerName={call.name} 
            acceptCall={answerCall}
            />
          )
        }
      </div>
    </div>
  )
}