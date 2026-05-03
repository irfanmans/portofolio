interface CardProps {
  children: React.ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <>
      <div className="border border-neutral-300 px-4 text- py-3 rounded-2xl">
        {children}
      </div>
    </>
  );
}
