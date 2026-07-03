import './Card.css';

export const Card = ({ className = '', children, ...props }) => (
  <div className={`card ${className}`.trim()} {...props}>
    {children}
  </div>
);
