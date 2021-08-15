import * as Yup from 'yup';

 export const ValidationSchema = Yup.object().shape({
    userName: Yup.string().required('Required'.toUpperCase()),
    password: Yup.string().required('Required'.toUpperCase()),
});
