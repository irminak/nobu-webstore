import { useFormik } from 'formik';
import Input from './UI/Input';
import { schema } from './schemas';
import Button from './UI/Button';
import CartContext from '../store/CartContext';
import { useContext } from 'react';

const Form = ({ setThanksMessage }) => {
    const onSubmit = async (values, actions) => {
        console.log(values);
        console.log(actions);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        actions.resetForm();
        setThanksMessage(true);
        resetCart();
    };
    const {
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
    } = useFormik({
        initialValues: {
            email: '',
            name: '',
            card: '',
            exp: '',
            cvc: '',
            street: '',
            apartment: '',
            city: '',
            post: '',
        },
        validationSchema: schema,
        onSubmit,
    });

    return (
        <form
            onSubmit={handleSubmit}
            autoComplete='off'
            className='font-roboto text-font'
        >
            <section className='py-4'>
                <h3 className='pb-4 text-xl'>Contact information</h3>
                <Input
                    label='Email address'
                    value={values.email}
                    onChange={handleChange}
                    id='email'
                    type='email'
                    placeholder='Enter email'
                    onBlur={handleBlur}
                    errors={errors.email}
                    touched={touched.email}
                />
            </section>
            <section className='py-4'>
                <h3 className='pb-4 text-xl'>Payment details</h3>
                <div>
                    <Input
                        label='Cardholder name'
                        value={values.name}
                        onChange={handleChange}
                        id='name'
                        type='text'
                        placeholder='John Doe'
                        onBlur={handleBlur}
                        errors={errors.name}
                        touched={touched.name}
                    />
                    <Input
                        label='Card number'
                        value={values.card}
                        onChange={handleChange}
                        id='card'
                        type='text'
                        placeholder='XXXX-XXXX-XXXX-XXXX'
                        onBlur={handleBlur}
                        errors={errors.card}
                        touched={touched.card}
                    />
                </div>
                <div className='flex gap-4'>
                    <Input
                        label='Expiration date'
                        value={values.exp}
                        onChange={handleChange}
                        id='exp'
                        type='text'
                        placeholder='MM/YYYY'
                        onBlur={handleBlur}
                        errors={errors.exp}
                        touched={touched.exp}
                        className='grow'
                    />{' '}
                    <Input
                        label='Security code'
                        value={values.cvc}
                        onChange={handleChange}
                        id='cvc'
                        type='text'
                        placeholder='CVC'
                        onBlur={handleBlur}
                        errors={errors.cvc}
                        touched={touched.cvc}
                        className='w-[100px]'
                    />
                </div>
            </section>
            <section className='py-4'>
                <h3 className='pb-4 text-xl'>Shipping address</h3>
                <div>
                    <Input
                        label='Street'
                        value={values.street}
                        onChange={handleChange}
                        id='street'
                        type='text'
                        placeholder=''
                        onBlur={handleBlur}
                        errors={errors.street}
                        touched={touched.street}
                    />
                    <Input
                        label='Apartment, suite, etc.'
                        value={values.apartment}
                        onChange={handleChange}
                        id='apartment'
                        type='text'
                        placeholder=''
                        onBlur={handleBlur}
                        errors={errors.apartment}
                        touched={touched.apartment}
                    />
                </div>
                <div className='flex gap-4'>
                    <Input
                        label='City'
                        value={values.city}
                        onChange={handleChange}
                        id='city'
                        type='text'
                        placeholder=''
                        onBlur={handleBlur}
                        errors={errors.city}
                        touched={touched.city}
                        className='grow'
                    />
                    <Input
                        label='Postal code'
                        value={values.post}
                        onChange={handleChange}
                        id='post'
                        type='text'
                        placeholder=''
                        onBlur={handleBlur}
                        errors={errors.post}
                        touched={touched.post}
                        className='w-[140px]'
                    />
                </div>
            </section>
            <Button
                text='Submit'
                disabled={isSubmitting}
            />
        </form>
    );
};

export default Form;

// className={errors.password &&touched.pasword ? 'input-error': ''}
