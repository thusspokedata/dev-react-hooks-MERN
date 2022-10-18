import { useState, useEffect } from 'react';
import { Message } from './Message';
import { useForm } from '../hook/useForm';

export const FormWithCustomHook = () => {
  const { formState, onInputChange, onResetForm, username, email, password } =
    useForm({
      username: '',
      email: '',
      password: '',
    });

  // useEffect(() => {
  //   // console.log('useEffect called');
  // }, []);

  // useEffect(() => {
  //   // console.log('formState changed');
  // }, [formState]);

  // useEffect(() => {
  //   // console.log('email changed');
  // }, [email]);

  return (
    <>
      <h1>Form with custom hook</h1>
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
<<<<<<< HEAD
      {username === 'strider2' && <Message />}
=======
      <input
        type="password"
        className="form-control mt-2"
        placeholder="Contraseña"
        name="password"
        value={password}
        onChange={onInputChange}
      />
      <button onClick={onResetForm} className="btn btn-primary mt-2">
        Borrar
      </button>
>>>>>>> 65fe4d330fd6ce428936245c241a159986d6777c
    </>
  );
};
