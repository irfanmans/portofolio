interface ButtonProps {
  type: "submit" | "reset" | "button" | undefined;
  className: string;
  children: React.ReactNode;
}

export default function Button({ type, className, children }: ButtonProps) {
  return (
    <>
      <button type={type} className={className}>
        {children}
      </button>
    </>
  );
}
