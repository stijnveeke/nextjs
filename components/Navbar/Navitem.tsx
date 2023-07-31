import React from "react";

export const NavItem: React.FC<{
  href: string;
  className: string;
  label: string;
}> = ({ href, className, label }) => {
  return (
    <a href={href} className={className}>
      {label}
    </a>
  );
};
