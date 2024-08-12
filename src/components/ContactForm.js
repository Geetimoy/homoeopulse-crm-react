
import React from 'react';
import { Formik } from 'formik';

import Rating from "./Rating";

function ContactForm(){
  return(

    <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (

    <form className="form-horizontal has-validation-callback" id="contact_form" name="contact_form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="user_name">Name</label>
        <input type="text" className="form-control" id="name" name="name" onChange={handleChange}
             onBlur={handleBlur}
             value={values.name} />
             {errors.name && touched.name && errors.name}
      </div>
      <div className="form-group">
        <label htmlFor="user_email">Email</label>
        <input type="email" className="form-control"  name="email" onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}/>
             {errors.email && touched.email && errors.email}
      </div>
      <div className="form-group">
        <label htmlFor="user_phone">Phone</label>
        <input type="tel" className="form-control" id="phone" name="phone" data-validation="required"/>
      </div>
      <div className="form-group">
        <label htmlFor="user_message">Message</label>
        <textarea class="form-control" name="contact_message" rows="6" maxlength="5000" placeholder="" required="required" id="form-validation-field-0"></textarea>
      </div>
      <button type="submit" className='btn btn-primary' disabled={isSubmitting}>
        Submit
      </button>
      <Rating></Rating>
    </form>
    )}
    </Formik>
  )
}

export default ContactForm;