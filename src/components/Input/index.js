import React from 'react';
import { Container, ErrorInput } from './style';

function Input({ label, errors, errorMsg, ...props }) {
  return (
    <Container errors={errors}>
      <div id="float-label">
        <input {...props} />
        <label htmlFor={label} className={props.value ? 'Active' : null}>
          {label}
        </label>
      </div>
      {errors ? <ErrorInput>{errorMsg}</ErrorInput> : null}
    </Container>
  );
}

export default Input;
