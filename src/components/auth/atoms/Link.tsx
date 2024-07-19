import React from 'react';
import NextLink from 'next/link';

interface LinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({ href, className, children }) => (
  <NextLink legacyBehavior href={href}>
    <a className={"font-bold " + className}>{children}</a>
  </NextLink>
);

export default Link;
