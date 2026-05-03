interface ButtonProps {
  type: "submit" | "reset" | "button" | undefined;
  className: string;
  children: React.ReactNode;
  onClick?: VoidFunction;
}

export default function Button({
  type,
  className,
  children,
  onClick,
}: ButtonProps) {
  return (
    <>
      <button type={type} className={className} onClick={onClick}>
        {children}
      </button>
    </>
  );
}
