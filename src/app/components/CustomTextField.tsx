// CustomTextField.tsx
import React from 'react';
import { TextField } from '@mui/material';
import './formulario.css';

interface CustomTextFieldProps {
  name: string;
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  helperText?: string;
  type?: string;
  beforeContent: string; // Add this prop
  svgIcon: React.ReactNode; 
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  name,
  label,
  placeholder,
  value,
  onChange,
  error,
  helperText,
  type = 'text',
  beforeContent, // Destructure this prop
  svgIcon, // Destructure this prop
}) => {
  return (
    <div className="input__container my-10 w-[90%] sm:w-[50%]" data-before-content={beforeContent}>
      <div className="shadow__input"></div>
      <button className="input__button__shadow">
      {svgIcon} {/* Render the passed SVG icon */}
      </button>
      <TextField
        placeholder={placeholder}
        className='input__search'
        required
        fullWidth
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        autoComplete="off"
        error={error}
        helperText={helperText}
        type={type}

      />
    </div>
  );
};

export default CustomTextField;
