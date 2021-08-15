import * as Yup from 'yup';

 export const ValidationSchema = Yup.object().shape({
    userName: Yup.string().required('Username is required'.toUpperCase()),
    password: Yup.string().required('Password is required'.toUpperCase()),
});
