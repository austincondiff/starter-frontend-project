import React from 'react';

const Stack = ({ children, direction = 'vertical', spacing, align = 'start', justify = 'start', className = '' }: { children: React.ReactNode, direction?: 'vertical' | 'horizontal', spacing?: number, align?: 'start' | 'center' | 'end', justify?: 'start' | 'center' | 'end', className?: string }) => {
  const directionClass = direction === 'vertical' ? 'flex-col' : 'flex-row';
  const justifyOptions = {
    start: "justify-start",
    center: "justify-center",
    between: "justify-between",
    end: "justify-end",
  };

  return (
    <div className={`flex ${directionClass} gap-${spacing} items-${align} ${justifyOptions[justify]} ${className}`}>
      {children}
    </div>
  );
};

export default Stack;
