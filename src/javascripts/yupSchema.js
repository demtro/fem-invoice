import * as yup from 'yup';

export const signUPSchema = yup.object().shape({
    email: yup
        .string()
        .email('Not a valid e-mail')
        .required('E-mail is required!')
        .trim(),

    password: yup
        .string()
        .required('Password is required!')
        .min(6,'Password must be min. 6 chars')
        .trim(),

    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')],'Passwords are not identical!')
        .trim()
});