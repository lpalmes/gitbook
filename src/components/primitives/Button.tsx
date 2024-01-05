'use client';

import Link from 'next/link';

import { tcls, ClassValue } from '@/lib/tailwind';

type ButtonProps = {
    href?: string;
    onClick?: () => void;
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    size?: 'default' | 'small';
    className?: ClassValue;
};

export function Button({
    href,
    onClick,
    children,
    variant = 'primary',
    size = 'default',
    className,
}: ButtonProps) {
    const variantClasses =
        variant === 'primary'
            ? //PRIMARY
              [
                  'bg-primary-600',
                  'text-white',
                  'ring-dark/2',
                  'hover:bg-primary-500',
                  'dark:ring-light/3',
                  'dark:bg-primary-500',
                  'dark:hover:bg-primary-400',
              ]
            : // SECONDARY
              [
                  'bg-dark/2',
                  'ring-dark/1',
                  'hover:bg-dark/3',
                  'dark:bg-light/2',
                  'dark:ring-light/1',
                  'dark:hover:bg-light/3',
              ];

    const sizeClasses =
        size === 'default'
            ? // DEFAULT
              ['text-base', 'px-4', 'py-2']
            : // SMALL
              ['text-xs', 'px-3 py-2'];

    const domClassName = tcls(
        'rounded-md',
        'place-self-start',
        'ring-1',
        'ring-inset',
        'grow-0',
        'shrink-0',
        variantClasses,
        sizeClasses,
        className,
    );

    if (href) {
        return (
            <Link href={href} className={domClassName}>
                {children}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={domClassName}>
            {children}
        </button>
    );
}