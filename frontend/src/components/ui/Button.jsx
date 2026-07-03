import './Button.css';

export const Button = ({
  as: Component = 'button',
  variant = 'primary',
  className = '',
  ...props
}) => {
  return <Component className={`btn btn--${variant} ${className}`.trim()} {...props} />;
};
