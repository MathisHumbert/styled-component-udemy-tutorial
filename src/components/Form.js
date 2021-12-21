import React from 'react';
import styled from 'styled-components';

const Form = () => {
  return (
    <div>
      <h2>some random stuff</h2>
      <Button>click me</Button>
      <Wrapper>
        <h2>Form</h2>
        <BasicInput />
        <BasicInput />
        <BasicInput type="email" placeholder="please enter email" />
        <Button type="submit">sumbit here</Button>
      </Wrapper>
      <form></form>
    </div>
  );
};

const Wrapper = styled.form`
  width: 300px;
  background: #fff;
  padding: 2rem;
  margin-top: 1rem;
`;

const Button = styled.button.attrs((props) => {
  return { type: props.type || 'button' };
})`
  background: var(--primary);
  border: none;
  color: white;
  padding: 0.25rem;
  cursor: pointer;
  height: ${({ type }) => type === 'submit' && '2rem'};
  display: ${({ type }) => type === 'submit' && 'block'};
  margin-top: ${({ type }) => type === 'submit' && '1rem'};
`;

const BasicInput = styled.input.attrs((props) => {
  return {
    type: props.type || 'text',
    placeholder: props.placeholder || 'please enter value',
  };
})`
  box-sizing: border-box;
  padding: 0.5rem;
  border: 2px solid #f2f4f8;
  border-radius: 0.25rem;
  width: 100%;
  margin-top: 1rem;
`;

export default Form;
