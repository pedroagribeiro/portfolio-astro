import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import InfoModal from '../feedback/InfoModal';

export default function Form() {
  const contact_submit_url =
    'https://portfolio-backend-production-696d.up.railway.app/api/contacts/submit';

  const [modal, setModal] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (d: any) => {
    axios
      .post(contact_submit_url, { contact: d })
      .then((res) => {
        console.log(res);
        setModal(true);
        setSuccess(true);
      })
      .catch((err) => {
        console.log(err);
        setModal(true);
        setSuccess(false);
      });
  };

  const onClose = () => {
    setModal(false);
  };

  return (
    <>
      <InfoModal
        onClick={onClose}
        display={modal}
        title='Sucesso'
        text='O seu contacto foi submetido com sucesso'
        success={success}
      />
      <form className='' onSubmit={handleSubmit(onSubmit)}>
        <div>
          <span className='uppercase text-sm font-bold'>Full Name</span>
          <input
            {...register('full_name', { required: true, minLength: 5 })}
            className='w-full bg-stone-200 text-stone-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline'
            type='text'
            placeholder=''
          />
          {errors.full_name && (
            <p className='text-red-600 text-sm py-2'>
              Please provide your full name in order to facilitate my response.
              It must have, at least, 5 characters
            </p>
          )}
        </div>
        <div className='mt-8'>
          <span className='uppercase text-sm font-bold'>Email</span>
          <input
            {...register('email', {
              required: true,
              pattern:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
            className='w-full bg-stone-200 text-stone-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline'
            type='text'
            placeholder=''
          />
          {errors.email && (
            <p className='text-red-600 text-sm py-2'>
              Please provide your email address in order for me to reach you
              back
            </p>
          )}
        </div>
        <div className='mt-8'>
          <span className='uppercase text-sm font-bold'>Message</span>
          <textarea
            {...register('message', { required: true, minLength: 20 })}
            className='w-full h-32 bg-stone-200 text-stone-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline'
          />
          {errors.message && (
            <p className='text-red-600 text-sm py-2'>
              Please make your message as clear and thorough as possible. It
              must have, at least, 20 characters.
            </p>
          )}
        </div>
        <div className='mt-8'>
          <div className='tracking-wide w-full inline-block mt-1.5 rounded-lg bg-green-800 text-white'>
            <button
              type='submit'
              className='tracking-wide w-full bg-green-600 text-center rounded-lg px-3 py-1 -translate-y-1 hover:-translate-y-1.5 items-center'
            >
              Send Message
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
