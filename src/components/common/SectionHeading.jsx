import React from 'react';
import Badge from './Badge';

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'center', // 'center' | 'right' | 'start'
  className = '',
  titleClassName = '',
}) {
  const alignClasses = {
    center: 'text-center items-center mx-auto',
    right: 'text-right items-start',
    start: 'text-right items-start',
  };

  return (
    <div className={`flex flex-col max-w-2xl mb-12 ${alignClasses[align] || alignClasses.center} ${className}`}>
      {badge && (
        <Badge variant="forest" className="mb-3">
          {badge}
        </Badge>
      )}
      <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-forest-900 leading-tight tracking-tight ${titleClassName}`}>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-charcoal-700 leading-relaxed max-w-xl">
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-12 bg-forest-400 rounded-full mt-4 ${align === 'center' ? 'mx-auto' : ''}`} />
    </div>
  );
}

