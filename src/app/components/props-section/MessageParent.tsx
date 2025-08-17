import React, { useState, useCallback } from 'react';
import { MessageChild } from './MessageChild.tsx';
import './MessageParent.scss';

const hasDigitsRegexp: RegExp = /\d+/;

export const MessageParent: React.FC = () => {
  const [input, setInput] = useState('');
  const [message, setMessage] = useState('');
  const [isTouched, setIsTouched] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setInput(newValue);
      validateInput(newValue);
    },
    []
  );
  
  const validateInput = useCallback((value: string) => {
    const trimmedValue = value.trim();
    const hasDigits = hasDigitsRegexp.test(trimmedValue);

    setIsValid(!hasDigits);
  }, []);

  const handleButtonClick = useCallback(
    () => {
      if (isValid && isTouched) {
        setMessage(input);
        setShowError(false);
      } else {
        setShowError(true);
      }
    },
    [input, isTouched, isValid]
  );

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Type your message"
        onBlur={() => setIsTouched(true)}
      />
      <button onClick={handleButtonClick}>Send to Child</button>
      {showError && !isValid && <p className='error'>Input cannot contain digits!</p>}
      {message && <MessageChild message={message} />}
    </>
  );
};