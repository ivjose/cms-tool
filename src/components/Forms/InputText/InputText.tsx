import { forwardRef } from 'react'
import classNames from '@/utils/classNames'
// import { UseFormRegister, FieldValues } from 'react-hook-form'

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

interface IProps extends InputProps {
  name: string
  label?: string
  error?: string
}

const InputText = forwardRef<HTMLInputElement, IProps>(
  ({ label, name, error, ...props }, ref) => (
    <div>
      {label && (
        <label
          htmlFor={name}
          className={classNames(
            error ? 'text-red-500 ' : 'text-gray-700 ',
            'block text-sm font-medium '
          )}
        >
          {label}
        </label>
      )}
      <input
        ref={ref}
        name={name}
        {...props}
        className={classNames(
          error
            ? 'border-red-300 text-red-500 focus:border-red-500 focus:ring-red-500'
            : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500',
          'block w-full appearance-none rounded-md border px-3 py-2 placeholder-gray-400 shadow-sm  focus:outline-none sm:text-sm'
        )}
      />

      {error && <p className="mt-2 text-xs text-red-500">{error}</p>}
    </div>
  )
)

InputText.displayName = 'InputText'

export default InputText
