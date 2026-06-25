import Link from "next/link";

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: "purple" | "white" | "outline";
  className?: string;
}

const variants = {
  purple: "bg-mvf-purple text-white hover:bg-mvf-purple-dark",
  white: "bg-white text-mvf-blue hover:bg-slate-100",
  outline: "border border-mvf-purple text-mvf-purple hover:bg-mvf-purple hover:text-white",
};

export function ButtonLink({ href, children, variant = "purple", className = "" }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-10 items-center justify-center px-8 py-3 text-sm font-bold transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
