import * as yup from 'yup';

export const schema = yup.object().shape({
  email: yup.string().required().email('Invalid email').label('Email'),
  password: yup.string().required().min(6).label('Password'),
});
