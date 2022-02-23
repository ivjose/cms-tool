import { useForm, UseFormReturn, SubmitHandler } from 'react-hook-form'

type FormProps<TFormValues> = {
  className: string
  onSubmit: SubmitHandler<TFormValues>
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Form = <TFormValues extends Record<string, any> = Record<string, any>>({
  className,
  onSubmit,
  children,
}: FormProps<TFormValues>) => {
  const methods = useForm<TFormValues>()
  return (
    <form className={className} onSubmit={methods.handleSubmit(onSubmit)}>
      {children(methods)}
    </form>
  )
}

export default Form
