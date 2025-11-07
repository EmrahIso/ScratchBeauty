'use client';

interface ControlledInputProps {
  element: 'input' | 'textarea';
  type?: string;
  id: string;
  css: string;
  placeholder: string;
  required: boolean;
  value: string;
  changeFormData: (type: string, newValue: string) => void;
}

const ControlledInput = ({
  element,
  type,
  id,
  css,
  placeholder,
  required,
  value,
  changeFormData,
}: ControlledInputProps) => {
  return element === 'input' ? (
    <input
      type={type}
      id={id}
      className={css}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={(e) => {
        changeFormData(id, e.target.value);
      }}
    />
  ) : (
    <textarea
      id={id}
      className={css}
      placeholder={placeholder}
      required={required}
      rows={5}
      value={value}
      onChange={(e) => {
        changeFormData(id, e.target.value);
      }}
    ></textarea>
  );
};

export default ControlledInput;
