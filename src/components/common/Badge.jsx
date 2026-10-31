import React from 'react';

export default function Badge({ children, variant = 'forest', className = '' }) {
  const variants = {
    forest: 'bg-forest-100 text-forest-800 border border-forest-200/60',
    sage: 'bg-sage-100 text-sage-600 border border-sage-200/50',
    sand: 'bg-sand-200 text-charcoal-800 border border-sand-300/60',
    white: 'bg-white/80 backdrop-blur-sm text-forest-800 shadow-sm border border-sand-200',
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${variants[variant] || variants.forest} ${className}`}>
      {children}
    </span>
  );
}

