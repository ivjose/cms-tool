import { useForm, UseFormReturn, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import type { AnyObjectSchema } from 'yup'

type FormProps<TFormValues> = {
  className: string
  schema: AnyObjectSchema
  onSubmit: SubmitHandler<TFormValues>
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Form = <TFormValues extends Record<string, any> = Record<string, any>>({
  className,
  onSubmit,
  children,
  schema,
}: FormProps<TFormValues>) => {
  const methods = useForm<TFormValues>({ resolver: yupResolver(schema) })

  return (
    <form className={className} onSubmit={methods.handleSubmit(onSubmit)}>
      {children(methods)}
    </form>
  )
}

export default Form
