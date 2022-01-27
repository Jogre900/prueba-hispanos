import './styles.css'
export default function TextInput({
  label,
  className,
  placeholder,
  name,
  value,
  onChange,
  disabled,
}) {
  return (
    <div className={className + ' input-container'}>
      <label htmlFor=''>{label}</label>
      <input
        type='text'
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  )
}
