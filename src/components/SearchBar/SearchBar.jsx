import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { Input, Button } from './SearchBar.styled';

export const SearchBar = ({ onSubmit }) => {
  const schema = yup.object().shape({
    query: yup.string().min(3).required(),
  });
  const handleSubmit = values => {
    onSubmit(values);
  };

  return (
    <Formik
      initialValues={{ query: '' }}
      schema={schema}
      onSubmit={handleSubmit}
    >
      <Form>
        <Input name="query" type="text" autoComplete="off" autoFocus />
        <Button type="submit">Search</Button>
      </Form>
    </Formik>
  );
};
