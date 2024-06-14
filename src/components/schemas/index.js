import * as yup from 'yup';

export const schema = yup.object().shape({
    email: yup
        .string()
        .email('Please enter a valid email')
        .required('Email is required'),
    name: yup.string().required('Name is required'),
    card: yup
        .string()
        .matches(/^[0-9]{16}$/, 'Card number must be 16 digits')
        .required('Card number is required'),
    exp: yup
        .string()
        .matches(
            /^(0[1-9]|1[0-2])\/?([0-9]{4})$/,
            'Expiration date must be in MM/YYYY format and valid'
        )
        .required('Expiration date is required'),
    cvc: yup
        .string()
        .matches(/^[0-9]{3,4}$/, 'CVC must be 3 or 4 digits')
        .required('CVC is required'),
    street: yup.string().required('Street is required'),
    apartment: yup.string().notRequired(),
    city: yup.string().required('City is required'),
    post: yup
        .string()
        .matches(/^[0-9]{5}$/, 'Postal code must be 5 digits')
        .required('Postal code is required'),
});
