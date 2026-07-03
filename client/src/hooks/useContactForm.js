import { useState } from 'react';
import { submitContactForm } from '../services/api.js';

const INITIAL_VALUES = { name: '', email: '', message: '', honeypot: '' };

export const useContactForm = () => {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      await submitContactForm(values);
      setStatus('success');
      setValues(INITIAL_VALUES);
    } catch (error) {
      setStatus('error');
      const serverErrors = error?.response?.data?.details;
      setErrorMessage(
        Array.isArray(serverErrors)
          ? serverErrors.join(' ')
          : error?.response?.data?.message || 'Something went wrong. Please try again.'
      );
    }
  };

  return { values, status, errorMessage, handleChange, handleSubmit };
};
