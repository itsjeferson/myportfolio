import './Tag.css';

export const Tag = ({ children, dot = false }) => (
  <span className="tag">
    {dot && <span className="tag__dot" aria-hidden="true" />}
    {children}
  </span>
);
