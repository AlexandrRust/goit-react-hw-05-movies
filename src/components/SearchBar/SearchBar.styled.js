import styled from 'styled-components';
import { Field } from 'formik';

export const Input = styled(Field)`
  font-size: 18px;
  font-weight: 600;
  border-radius: 5px;
  margin-right: 10px;
  &[type='text'] {
    padding-inline-start: 5px;
  }
`;

export const Button = styled.button`
  font-size: 18px;
  border-radius: 5px;
`;
