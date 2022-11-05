import { useState } from 'react';

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }) => {
    const { value, name } = target;
    setFormState({ ...formState, [name]: value });
    // console.log({ value, name });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };
  return { ...formState, formState, onInputChange, onResetForm };
};
