import React from "react";

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function CardContent({ className, ...props }: CardContentProps) {
  return <div className={`p-6 pt-0 ${className || ""}`} {...props} />;
}
