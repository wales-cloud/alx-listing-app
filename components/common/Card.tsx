import React from 'react';
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({ title }) => (
  <div className="border p-4 rounded-lg shadow-md">
    <h2>{title}</h2>
  </div>
);

export default Card;
