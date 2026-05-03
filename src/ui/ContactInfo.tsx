interface ContactInfoProps {
  children: React.ReactNode;
  className: string;
}

export default function ContactInfo({ children, className }: ContactInfoProps) {
  return (
    <>
      <span className={className}>{children}</span>
    </>
  );
}
