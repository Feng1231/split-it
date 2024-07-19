import React from 'react';
import Label from '../atoms/Label';
import Input from '../atoms/Input';

interface FormFieldProps {
  label: string;
  placeholder?: string;
  type: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  error?: string;
}

const FormField: React.FC<FormFieldProps> = ({ label, placeholder, type, id, value, onChange, required = false, error }) => (
  <div className="relative mb-4">

    <div className="relative">
      <Input
        type={type}
        // placeholder={placeholder ?? 'input'}
        id={id}
        value={value}
        onChange={onChange }
        className={`w-full px-3 py-2 border rounded-md font-medium text-black focus:outline-none focus:ring focus:border-blue-300 peer ${value ? 'pt-6' : 'pt-3'}`}
        required={required}
      />
      <Label htmlFor={id} className={`absolute top-4 left-3 text-gray-500 transition-transform transform ${value ? 'scale-100 -translate-y-4' : 'scale-100 -translate-y-1'} peer-focus:scale-100 peer-focus:-translate-y-4 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:scale-100`}>
        {placeholder}
      </Label>
    </div>
    {error && <p className="text-red-500 mt-1">{error}</p>}
  </div>
);

export default FormField;
