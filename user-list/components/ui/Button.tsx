import { HtmlHTMLAttributes, JSX } from 'react';

interface Props extends HtmlHTMLAttributes<HTMLButtonElement> {
  type: 'submit' | 'button' | 'reset';
  children: JSX.Element | string | JSX.Element[] | React.ReactNode;
  btnStyle: 'primary' | 'secondary' | 'tertiary' | 'icon' | 'link';
}
export const Button = ({
  type,
  children,
  className = '',
  btnStyle = 'primary',
  ...others
}: Props): JSX.Element => {
  const baseClass =
    'rounded-lg text-sm px-4 py-2 active:brightness-125 hover:brightness-90 focus:outline-none font-medium border';

  const btnStyles: Record<string, string> = {
    primary: 'text-primary-text bg-primary border-0',
    secondary: 'text-primary-text bg-secondary border-boder-color',
    tertiary: 'text-primary-text bg-accent border-boder-color',
    icon: 'border-0 rounded-full p-2 hover:backdrop-brightness-90',
  };

  return (
    <button
      type={type}
      {...others}
      className={`${baseClass} ${btnStyles[btnStyle]} ${className}`}
    >
      {children}
    </button>
  );
};
