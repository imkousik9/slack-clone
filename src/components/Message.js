import React from 'react';
import './Message.css';
import Avatar from '@material-ui/core/Avatar';

function Message({ message, timestamp, user, userImage }) {
  return (
    <div className="message">
      <Avatar src={userImage} alt={user} />
      {/* <img src={userImage} alt="" /> */}
      <div className="message__info">
        <h4>
          {user}{' '}
          <span className="message__timestamp">
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Message;
