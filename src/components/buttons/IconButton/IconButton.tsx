import { ButtonHTMLAttributes, FC } from 'react';
import './IconButton.css'

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const IconButton: FC<IProps> = (props) => {
  return (
    <button {...props} className={`icon-btn ${props.className || ''}`}>
      {props.children}
    </button>
  );
};

export default IconButton;
