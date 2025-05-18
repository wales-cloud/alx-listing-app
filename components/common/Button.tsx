import React from 'react';
import { ButtonProps } from '../../interfaces';

const Button: React.FC<ButtonProps> = ({ label, onClick }) => (
  <button onClick={onClick} className="bg-blue-500 text-white px-4 py-2 rounded">
    {label}
  </button>
);

export default Button;
