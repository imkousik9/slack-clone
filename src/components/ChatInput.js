import React, { useState } from 'react';
import firebase from 'firebase';
import db from '../firebase';
import { useStateValue } from '../StateProvider';
import './ChatInput.css';

function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState('');
  const [{ user }] = useStateValue();

  const semdMessage = e => {
    e.preventDefault();

    if (channelId) {
      db.collection('rooms').doc(channelId).collection('messages').add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: user.displayName,
        userImage: user.photoURL
      });
    }
  };

  console.log(user);
  return (
    <div className="chatInput">
      <form>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder={`Message #${channelName?.toLowerCase()}`}
        />
        <button type="submit" onClick={semdMessage}>
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
