import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'ghost' | 'sand'
  size = 'md', // 'sm' | 'md' | 'lg'
  to,
  href,
  onClick,
  className = '',
  disabled = false,
  type = 'button',
  icon: Icon,
  iconPosition = 'start',
  fullWidth = false,
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none disabled:active:scale-100";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm md:text-base gap-2",
    lg: "px-7 py-3.5 text-base md:text-lg gap-2.5 shadow-sm",
  };

  const variantStyles = {
    primary: "bg-forest-800 text-sand-50 hover:bg-forest-900 focus:ring-forest-800 shadow-soft hover:shadow-card",
    secondary: "bg-forest-500 text-white hover:bg-forest-600 focus:ring-forest-500 shadow-soft",
    outline: "border-2 border-forest-800 text-forest-800 hover:bg-forest-800 hover:text-white focus:ring-forest-800",
    outlineSage: "border border-forest-300 text-forest-800 bg-white/60 hover:bg-forest-50 focus:ring-forest-300",
    sand: "bg-sand-200 text-forest-900 hover:bg-sand-300 focus:ring-sand-400",
    ghost: "text-forest-800 hover:bg-forest-50 focus:ring-forest-200",
    white: "bg-white text-forest-900 hover:bg-sand-100 shadow-soft focus:ring-white",
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${fullWidth ? 'w-full' : ''} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedStyles} {...props}>
        {Icon && iconPosition === 'start' && <Icon className="w-5 h-5 flex-shrink-0" />}
        <span>{children}</span>
        {Icon && iconPosition === 'end' && <Icon className="w-5 h-5 flex-shrink-0" />}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedStyles} target="_blank" rel="noopener noreferrer" {...props}>
        {Icon && iconPosition === 'start' && <Icon className="w-5 h-5 flex-shrink-0" />}
        <span>{children}</span>
        {Icon && iconPosition === 'end' && <Icon className="w-5 h-5 flex-shrink-0" />}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedStyles}
      {...props}
    >
      {Icon && iconPosition === 'start' && <Icon className="w-5 h-5 flex-shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'end' && <Icon className="w-5 h-5 flex-shrink-0" />}
    </button>
  );
}

