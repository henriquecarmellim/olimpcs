"use client"
import React, { useCallback } from 'react';
import Link from 'next/link';

// Button Component
type ButtonProps = {
    className?: string;
    children: React.ReactNode;
    onClick?: () => void; // Função opcional passada pelo usuário
    redirectUrl?: string; // URL opcional para redirecionamento
    type?: 'button' | 'submit' | 'reset'; // Tipos de botão permitidos
    disabled?: boolean; // Botão desativado
};

export function Button({
    className,
    children,
    onClick,
    redirectUrl = '/',
    type = 'button',
    disabled = false,
}: ButtonProps) {
    const handleClick = useCallback(() => {
      if (onClick) {
        onClick();
      } else if (redirectUrl) {
        window.location.href = redirectUrl;
      }
    }, [onClick, redirectUrl]);
  
    return (
      <button
        className={className}
        onClick={handleClick}
        type={type}
        disabled={disabled}
        aria-label={children?.toString() || 'button'}
      >
        {children}
      </button>
    );
}

// Card Components
interface CardProps {
  children: React.ReactNode;
  className?: string;
}

// define o css do element "Card"
export const Card = ({ children, className = '' }: CardProps) => {
  return <div className={`border p-4 rounded-lg shadow-md bg-white dark:bg-gray-700 ${className}`}>{children}</div>;
};

// define o css do element "CardHeader"
export const CardHeader = ({ children, className = '' }: CardProps) => {
  return <div className={`mb-4 flex items-center gap-4 ${className}`}>{children}</div>;
};

// define o css do element "CardTitle"
export const CardTitle = ({ children, className = '' }: CardProps) => {
  return <h3 className={`text-xl font-bold ${className}`}>{children}</h3>;
};

// define o css do element "CardContent"
export const CardContent = ({ children, className = '' }: CardProps) => {
  return <div className={`text-sm ${className}`}>{children}</div>;
};

// define o css do element "CardDescription"
export const CardDescription = ({ children, className = '' }: CardProps) => {
  return <p className={`text-gray-600 dark:text-gray-300 ${className}`}>{children}</p>;
};

// Icon Components
export const Flame = ({ className = '' }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C8 7 10 11 10 12c0 2-2 4-2 6 0 4 3 6 6 6s6-2 6-6c0-2-2-4-2-6 0-1 2-5-2-10-1 1-4 2-6 0z" />
  </svg>
);

export const Medal = ({ className = '' }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0l4 7-6 5h8L12 24l-2-6-8-2 8-3L8 7z" />
  </svg>
);

export const Trophy = ({ className = '' }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M21 2h-3V1h-2v1H8V1H6v1H3v4c0 4.6 3 8.4 7 9.5V19H8v2h8v-2h-2v-3.5c4-1.1 7-4.9 7-9.5V2zM5 6V4h2v4.5C5.9 8 5 7 5 6zm14 0c0 1-1 2-2 2.5V4h2v2z" />
  </svg>
);
