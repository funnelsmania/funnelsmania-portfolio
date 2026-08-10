import { Link } from 'react-router-dom';

const variants = {
  primary: 'btn btn-primary',
  secondary: 'btn btn-secondary',
  outline: 'btn btn-outline',
  ghost: 'btn btn-ghost',
};

export default function Button({
  children,
  variant = 'primary',
  to,
  href,
  className = '',
  type = 'button',
  ...props
}) {
  const classes = `${variants[variant] || variants.primary} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
