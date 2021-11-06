import { ButtonHTMLAttributes, FC } from 'react';
import './TextButton.css'

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const TextButton: FC<IProps> = (props) => {
  return (
    <button {...props} className={`text-btn ${props.className || ''}`}>
      {props.children}
    </button>
  );
};

export default TextButton;
