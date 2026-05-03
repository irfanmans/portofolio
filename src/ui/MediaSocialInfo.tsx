import { Link } from "react-router-dom";

interface MedaiSocialInfoProps {
  to: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
}

export default function MediaSocialInfo({
  to,
  target = "_blank",
  rel = "noopener noreferrer",
  children,
}: MedaiSocialInfoProps) {
  return (
    <>
      <Link to={to} target={target} rel={rel}>
        {children}
      </Link>
    </>
  );
}
