import styles from './Input.module.css';

export default function Input(props) {
  const { id, type, label, register, placeholder } = { ...props };
  const clasess = [styles.input].join(' ').trim();

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        className={clasess}
        id={id}
        type={type || 'text'}
        {...register}
        placeholder={placeholder}
      />
    </>
  );
}
