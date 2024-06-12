import { useFormik } from 'formik';
import Input from './UI/Input';
import { schema } from './schemas';

const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
};

const Form = () => {
    const {
        values,
        errors,
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

    console.log(errors);
    return (
        <form
            onSubmit={handleSubmit}
            autoComplete='off'
        >
            <section>
                <h3>Contact information</h3>
                <Input
                    label='Email address'
                    value={values.email}
                    onChange={handleChange}
                    id='email'
                    type='email'
                    placeholder='Enter email'
                    onBlur={handleBlur}
                />
            </section>
            <section>
                <h3>Payment details</h3>
                <div>
                    <Input
                        label='Cardholder name'
                        value={values.name}
                        onChange={handleChange}
                        id='name'
                        type='text'
                        placeholder='John Doe'
                        onBlur={handleBlur}
                    />
                    <Input
                        label='Card number'
                        value={values.card}
                        onChange={handleChange}
                        id='card'
                        type='text'
                        placeholder='XXXX-XXXX-XXXX-XXXX'
                        onBlur={handleBlur}
                    />
                </div>
                <div>
                    <Input
                        label='Expiration date'
                        value={values.exp}
                        onChange={handleChange}
                        id='exp'
                        type='text'
                        placeholder='MM/YYYY'
                        onBlur={handleBlur}
                    />{' '}
                    <Input
                        label='Security code'
                        value={values.cvc}
                        onChange={handleChange}
                        id='cvc'
                        type='text'
                        placeholder='CVC'
                        onBlur={handleBlur}
                    />
                </div>
            </section>
            <section>
                <h3>Shipping address</h3>
                <div>
                    <Input
                        label='Street'
                        value={values.street}
                        onChange={handleChange}
                        id='street'
                        type='text'
                        placeholder=''
                        onBlur={handleBlur}
                    />
                    <Input
                        label='Apartment, suite, etc.'
                        value={values.apartment}
                        onChange={handleChange}
                        id='apartment'
                        type='text'
                        placeholder=''
                        onBlur={handleBlur}
                    />
                </div>
                <div>
                    <Input
                        label='City'
                        value={values.city}
                        onChange={handleChange}
                        id='city'
                        type='text'
                        placeholder=''
                        onBlur={handleBlur}
                    />
                    <Input
                        label='Postal code'
                        value={values.post}
                        onChange={handleChange}
                        id='post'
                        type='text'
                        placeholder=''
                        onBlur={handleBlur}
                    />
                </div>
            </section>
            <button
                type='sumbit'
                disabled={isSubmitting}
            >
                Submit
            </button>
        </form>
    );
};

export default Form;

// className={errors.password &&touched.pasword ? 'input-error': ''}
