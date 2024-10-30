// src/DynamicContactForm.js
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
      phone: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(50, 'Must be 50 characters or less')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      message: Yup.string()
        .max(500, 'Must be 500 characters or less')
        .required('Required'),
      phone: Yup.string()
        .matches(/^\d{10}$/, 'Must be a 10-digit phone number')
        .required('Required'),
    }),
    onSubmit: (values) => {
      console.log(values);
      // handle form submission (e.g., API call)
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label className='block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4' htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text"'
          {...formik.getFieldProps('name')}
        />
        {formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name}</div>
        ) : null}
      </div>

      <div>
        <label className='block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4' htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text"'
          {...formik.getFieldProps('email')}
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
      </div>

      <div>
        <label className='block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4' htmlFor="phone">Phone</label>
        <input
          id="phone"
          type="text"
          className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text"'
          {...formik.getFieldProps('phone')}
        />
        {formik.touched.phone && formik.errors.phone ? (
          <div>{formik.errors.phone}</div>
        ) : null}
      </div>

      <div>
        <label className='block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4' htmlFor="message">Message</label>
        <textarea
          id="message"
          className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text"'
          {...formik.getFieldProps('message')}
        />
        {formik.touched.message && formik.errors.message ? (
          <div>{formik.errors.message}</div>
        ) : null}
      </div>

      <button className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded' type="submit">Submit</button>
    </form>
  );
};

export default Form;
