import React from 'react';

interface MessageChildProps {
  message: string;
}

export const MessageChild: React.FC<MessageChildProps> = ({ message }) => (
  <div>
    <h3>Child received: {message}</h3>
  </div>
);