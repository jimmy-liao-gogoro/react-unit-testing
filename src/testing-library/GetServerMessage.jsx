import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { getServerMessage } from './api';


const GetServerMessage = () => {
  const [serverMessage, setServerMessage] = useState(null);

  const handleMessageClick = async () => {
    const { data } = await getServerMessage();
    const [key] = Object.keys(data);
    const message = data[key];
    setServerMessage(`${key} ${message}`);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleMessageClick}>
        Get Server Message
      </Button>
      <div style={{ marginTop: '1rem' }}>
        <p>
          Server Message:
          {' '}
          {serverMessage}
        </p>
      </div>
    </div>
  );
};

export default GetServerMessage;
