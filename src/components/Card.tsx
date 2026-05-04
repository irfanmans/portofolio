interface CardProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Card({ children, onClick }: CardProps) {
  return (
    <>
      <div
        onClick={onClick}
        className="border border-neutral-300 px-4 py-3 rounded-2xl"
      >
        {children}
      </div>
    </>
  );
}
