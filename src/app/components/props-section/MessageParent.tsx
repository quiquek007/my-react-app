import React, { useState, useCallback } from 'react';
import { MessageChild } from './MessageChild.tsx';

export const MessageParent: React.FC = () => {
  const [input, setInput] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value),
    []
  );

  const handleButtonClick = useCallback(
    () => setMessage(input),
    [input]
  );

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Type your message"
      />
      <button onClick={handleButtonClick}>Send to Child</button>
      <MessageChild message={message} />
    </>
  );
};