import React from "react";

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export function CardTitle({ className, ...props }: CardTitleProps) {
  return (
    <h3
      className={`text-2xl font-semibold leading-none tracking-tight text-gray-900 ${
        className || ""
      }`}
      {...props}
    />
  );
}
