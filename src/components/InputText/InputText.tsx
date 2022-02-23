import { forwardRef } from 'react'
// import { UseFormRegister, FieldValues } from 'react-hook-form'

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

interface IProps extends InputProps {
  label: string
}

const InputText = forwardRef<HTMLInputElement, IProps>(
  ({ label, ...props }, ref) => (
    <>
      <label>{label}</label>
      <input ref={ref} {...props} />
    </>
  )
)

InputText.displayName = 'InputText'

export default InputText
