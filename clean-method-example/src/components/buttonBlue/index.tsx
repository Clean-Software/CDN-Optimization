import React from 'react';
import './styles.scss';
import { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const buttonBlue = (props: ButtonProps) => {
    return <button className="button" {...props}></button>;
};

export default buttonBlue;
