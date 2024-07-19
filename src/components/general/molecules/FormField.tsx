import React from 'react';
import Label from '../atoms/Label';
import Input from '../atoms/Input';

interface FormFieldProps {
  label: string;
  type: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const FormField: React.FC<FormFieldProps> = ({ label, type, id, value, onChange, required = false }) => (
  <div className="mb-4">
    <Label htmlFor={id} className="block text-gray-700 mb-2">
      {label}
    </Label>
    <Input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
      required={required}
    />
  </div>
);

export default FormField;
