import { styled } from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid black;
  padding: 20px 30px;
  background-color: #a0cfc0;
`;
export const Input = styled.input`
  width: 100%;
  margin-top: 5px;
  padding: 5px;
`;
export const Button = styled.button`
  margin: 0 auto;
  padding: 5px 10px;
  background-color: #d7bda3;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  font-weight: 600;
  transition: all 300ms linear;
  &:hover {
    scale: 1.1;
    background-color: #fae8c8;
  }
`;
