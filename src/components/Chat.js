import React, { useState, useEffect } from 'react';
import './Chat.css';
import { useParams } from 'react-router-dom';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import db from '../firebase';
import Message from './Message';
import ChatInput from './ChatInput';

function Chat() {
  const { roomId } = useParams();
  const [roomDetals, setRoomDetals] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);

  useEffect(() => {
    if (roomId) {
      db.collection('rooms')
        .doc(roomId)
        .onSnapshot(snapshot => setRoomDetals(snapshot.data()));

      db.collection('rooms')
        .doc(roomId)
        .collection('messages')
        .orderBy('timestamp', 'desc')
        .onSnapshot(snapshot => {
          setRoomMessages(
            snapshot.docs.map(doc => ({ id: doc.id, messageData: doc.data() }))
          );
        });
    }
  }, [roomId]);

  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            <strong>#{roomDetals?.name}</strong>
            <StarBorderOutlinedIcon />
          </h4>
        </div>
        <div className="chat__headerRight">
          <p>
            <InfoOutlinedIcon /> Details
          </p>
        </div>
      </div>
      <div className="chat__messages">
        {roomMessages.map(
          ({ id, messageData: { message, timestamp, user, userImage } }) => (
            <Message
              key={id}
              message={message}
              timestamp={timestamp}
              user={user}
              userImage={userImage}
            />
          )
        )}
      </div>

      <ChatInput channelName={roomDetals?.name} channelId={roomId} />
    </div>
  );
}

export default Chat;
