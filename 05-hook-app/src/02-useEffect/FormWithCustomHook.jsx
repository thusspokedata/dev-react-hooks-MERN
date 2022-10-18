import { useState, useEffect } from 'react';
import { Message } from './Message';

export const FormWithCustomHook = () => {
  const [formState, setFormState] = useState({
    username: 'strider',
    email: 'strider@k.com',
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { value, name } = target;
    setFormState({ ...formState, [name]: value });
    // console.log({ value, name });
  };

  useEffect(() => {
    // console.log('useEffect called');
  }, []);

  useEffect(() => {
    // console.log('formState changed');
  }, [formState]);

  useEffect(() => {
    // console.log('email changed');
  }, [email]);

  return (
    <>
      <h1>Form With Custom Hook</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="email@example.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      {username === 'strider2' && <Message />}
    </>
  );
};
