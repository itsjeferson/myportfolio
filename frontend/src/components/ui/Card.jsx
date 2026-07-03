import './Card.css';

export const Card = ({ as: Component = 'div', className = '', children, ...props }) => (
  <Component className={`card ${className}`.trim()} {...props}>
    {children}
  </Component>
);
