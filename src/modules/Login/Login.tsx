import * as yup from 'yup'
import InputText from '@/components/Forms/InputText'
import Form from '@/components/Forms/Form'

const schema = yup.object({
  email: yup.string().email().defined().required('Please Enter your email'),

  password: yup
    .string()
    .defined()
    .required('Please Enter your password')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
    ),
})

type IFormValues = yup.InferType<typeof schema>

const Login = () => {
  const onSubmit = (data: IFormValues) => {
    console.log(data)
  }
  return (
    <div className="space-y-6">
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Account Login
      </h2>

      <Form className="space-y-6" onSubmit={onSubmit} schema={schema}>
        {({ register, formState: { errors } }) => (
          <>
            <InputText
              label="Email address"
              error={errors?.email?.message}
              {...register('email')}
            />
            <InputText
              label="First Name"
              error={errors?.password?.message}
              {...register('password')}
            />

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Login
              </button>
            </div>
          </>
        )}
      </Form>

      <div className="flex justify-center">
        <div className="text-sm">
          <a
            href="#"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Forgot password?
          </a>
        </div>
      </div>

      <div>
        <button
          type="button"
          className="flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          No Account? Contact us now
        </button>
      </div>
    </div>
  )
}

export default Login
