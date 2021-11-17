import React, { useState, useEffect }  from 'react';
import { useForm, Controller } from 'react-hook-form';
// import Select from 'react-select';
import classNames from 'classnames';
import get from 'lodash/get';
import axios from 'axios';
import HubspotForm from 'react-hubspot-form';

// import { emailPattern, phonePattern } from '../validations/patterns';
// import IconLoading from '../assets/svg/loading.svg';
import IconCross from '../assets/svg/cross.svg';
import IconArrow from '../assets/svg/arrow.svg';

// var Recaptcha = require('react-recaptcha');
// const countries = require('../constants/countries');

// const countriesSelect = countries.map(country => ({ value: country.name, label: country.name }));

const isClient = typeof window === 'object';

if (isClient) {
  window.jQuery = window.jQuery || (() => ({
    // these are all methods required by HubSpot
    change: () => {},
    trigger: () => {},
    serializeArray: () => {},
  }));
}

// const selectStyles = {
//   control: base => ({
//     ...base,
//     height: 54
//   }),
// };

export const ContactForm = (props) => {
  const { register, handleSubmit, errors, clearErrors, setError, control, triggerValidation, setValue } = useForm({ mode: 'onChange' });
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    register({ name: 'g-recaptcha-response' }, { required: true });
  }, [register]);

  const onVerifyCaptcha = token => {
    setValue('g-recaptcha-response', token);
    triggerValidation('g-recaptcha-response');
  };

  const onFormSubmit = async data => {
    console.log('onFormSubmit', data);
    clearErrors();
    setLoading(true);

    try {
      const fetchApi = await axios.post('https://api.icdsca.com/feedback', { ...data }, {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      });

      setTimeout(() => fetchApi, 1000);
      setIsSubmitted(true);
    } catch (e) {
      setError("formError", {
        type: "manual",
        message: get(e, 'response.data.error', 'Error')
      });
    }

    setLoading(false);
  };

  const handleChange = () => {
    clearErrors('formError');
  };

  return (
    <div className="contact-form">
      <form  onSubmit={handleSubmit(onFormSubmit)} onChange={handleChange} className="contact-form__wrapper">
        <div className={classNames("contact-form__form", { isSubmitted })}>
          <div className="contact-form__header">
            <h2 className="headline hide-underline">Let’s Work Together</h2>
            <button type="button" className="contact-form__close" onClick={props.onClose}><IconCross /> </button>
          </div>

          {!isSubmitted && <div className="contact-form__hubspot"><HubspotForm
            portalId='8428501'
            formId='6e2fe30d-45ff-48a6-b09b-09af3da493bf'
            onSubmit={() => { setTimeout(() => { setIsSubmitted(true); }, 500) }}
            onReady={(form) => {
              let myiFrame = document.getElementsByClassName("hs-form-iframe")[0];
              let doc = myiFrame.contentDocument;
              doc.body.innerHTML = doc.body.innerHTML + '<style>@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap"); .inputs-list { padding-left: 0 !important; } .hs-form-booleancheckbox-display input:checked + span:after { content:"";position: absolute;top: 5px;left: 5px;width: 11px;height: 7px; background-size: 11px 7px; background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAQCAYAAAAMJL+VAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADdSURBVHgBtY/BDYIwGEa/lnjg5giM0BWcxEaI8cgGuoFXLwbdwA2ME8gIrGA8kIC0Wo0EsEiL+E5/m+a9/sAfyHwW3eZsqmaCgVFyScDV7FBwBwNSlSsKgQt9H2TIxviBplxI7N1tzJ+BPGDL7IpzumAeepAFbK2Tq5nUyhKJGGHibuIEhqjPCWClkytoIXEqXxN4NMfRdJMu+Uv5IJ0xTimi8tZgExN5GbCNmMprAdOIjfwj0BWxlWsDbRFCcJBAaCNvDWgjFUzlXwNtERt5Z6AZsZUboyKpz3bowR0tRaoP/2HRjAAAAABJRU5ErkJggg=="); } .hs-form-booleancheckbox-display input + span:before { content:""; position: absolute; top: -2px;left: 0; width: 20px; height: 20px;border: 1px solid #EBEAED; border-radius: 2px; box-sizing: border-box; } .hs-form-booleancheckbox-display input + span { position: relative; padding-left: 26px; font-weight: 600; } .hs-form-booleancheckbox-display input { display: none; } .hs-form-radio-display input:checked + span:after { content: ""; display: block; position: absolute; left: 3px; top: 7px; background: #F96430; width: 6px; height: 6px; border-radius: 50%; } .hs-form-radio-display input:checked + span:before { border-color: #F96430; } .hs-form-radio-display span:before { content: ""; display: block; position: absolute; left: 0; top: 4px; border: 1px solid #D8D8D8; width: 12px; height: 12px; border-radius: 50%; box-sizing: border-box; } .hs-form-radio-display span { position: relative; padding-left: 20px;  } .hs-form-radio-display input { display: none; } .hs_error_rollup { position: absolute; margin-top: 0; } .submitted-message { padding-left: 12px;} .hs-button.primary:hover { background: #fc7444 !important; } .hs-button.primary { border-radius: 0 !important; width: 256px; margin: 0 auto; font-family: "Open Sans" !important; background: #F96430 !important; transition: background .15s ease-in-out;  text-transform: uppercase; height: 50px; font-weight: 600; outline: none !important; }  .hubspot-link__container.sproket { display: none !important;} .hs-interested_in_becoming ul { display: flex; } .hs-fieldtype-radio > label { font-weight: 600; font-size: 14px; padding: 4px 0; } .hs-fieldtype-radio ul > li > label { font-weight: 600; font-size: 15px; } .hs-fieldtype-text input:focus, .hs-fieldtype-textarea textarea:focus { border-color: #F96430; } .hs-fieldtype-text input::placeholder, .hs-fieldtype-textarea textarea::placeholder { font-weight: 400 !important; font-family: "Open Sans"; color: #87949E;} .hs-fieldtype-text input, .hs-fieldtype-textarea textarea { height: 50px !important; padding: 4px 0 8px !important; background: transparent !important; border-radius: 0; border: none;border-bottom: 2px solid #D5D3D3;font-size: 16px;color: #363C40;font-weight: bold; font-family: "Open Sans";} .hs-fieldtype-text label, .hs-fieldtype-select label { display: none; }  .hs-fieldtype-textarea textarea { height: 80px !important; resize: none; }label { color: #363C40 !important; cursor: pointer; font-family: "Open Sans" !important; } .actions { text-align: center;} .hs_recaptcha { width: 275px; margin: 0 auto; } .hs-fieldtype-select select { background-color: transparent !important; border: 0; border-bottom: 2px solid #D5D3D3;font-size: 16px; border-radius: 0; color: #87949E; padding: 0; height: 50px; }</style>';
            }}
            loading={<div>Loading...</div>}
          /></div>}

          {/*<label className={classNames("input-text", { 'error': errors.organization_name} )} htmlFor='organization_name'>
            <input placeholder="Organization Name" name="organization_name" ref={register({ required: { value: true, message: 'Required' } })} />
            {errors.organization_name && <span className="input-text__error"><br/>{errors.organization_name.message}</span>}
          </label>

          <label className={classNames("input-text", { 'error': errors.name} )} htmlFor='name'>
            <input placeholder="Name" name="name" ref={register({ required: { value: true, message: 'Required' } })} />
            {errors.name && <span className="input-text__error"><br/>{errors.name.message}</span>}
          </label>

          <label className={classNames("input-text", { 'error': errors.email} )} htmlFor='email'>
            <input placeholder="Email" name="email" ref={register({
              required: { value: true, message: 'Required' },
              validate: { email: (value) => !emailPattern.test(value) ? 'Email is incorrect' : null },
            })} />
            {errors.email && <span className="input-text__error"><br/>{errors.email.message}</span>}
          </label>

          <label className={classNames("input-text", { 'error': errors.mobile} )} htmlFor='mobile'>
            <input placeholder="Mobile No" name="mobile" ref={register({
              required: { value: true, message: 'Required' },
              validate: { email: (value) => !phonePattern.test(value) ? 'Phone Number is incorrect' : null },
            })} />
            {errors.mobile && <span className="input-text__error"><br/>{errors.mobile.message}</span>}
          </label>

           eslint-disable-next-line
          <label className={classNames("input-text", { 'error': errors.country} )} htmlFor='country'>
            <Controller
              name="country"
              as={Select}
              options={countriesSelect}
              control={control}
              placeholder="Country"
              rules={{ required: { value: true, message: 'Required' } }}
              className="react-select-container"
              classNamePrefix="react-select"
              styles={selectStyles}
            />
            {errors.country && <span className="input-text__error"><br/>{errors.country.message}</span>}
          </label>

          <label className={classNames("input-text", { 'error': errors.message} )} htmlFor='message'>
            <textarea placeholder="Message" name="message" ref={register({ required: { value: true, message: 'Required' } })} />
            {errors.message && <span className="input-text__error"><br/>{errors.message.message}</span>}
          </label>

          {!isSubmitted && <div className="contact-form__captcha">
            <Recaptcha
              sitekey={process.env.RECAPTCHA_SITE_KEY}
              className="h-16 mr-4 max-w-xxs"
              verifyCallback={onVerifyCaptcha}
              badge="inline"
            />
          </div>}
          <p>
            <button type="submit" className="btn-red" disabled={loading}>
              {loading ? <IconLoading /> : <>Submit</> }
            </button>
          </p>
          {errors.formError && errors.formError.message && <div className="contact-form__errors">{errors.formError.message}</div> }*/}
        </div>

        <div className={classNames("contact-form__success", { isSubmitted })}>
          <div className="contact-form__header">
            <h2 className="headline hide-underline">Thank you!</h2>
            <p className="contact-form__header-success-description">Thank you for reaching out to us — <br/> we'll be in touch shortly!</p>
            <button type="button" className="contact-form__button-back" onClick={props.onClose}>
              <IconArrow />
              Back to homepage
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
