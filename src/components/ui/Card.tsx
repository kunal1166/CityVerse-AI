interface CardProps {
  children: React.ReactNode;
  className?: string;
}

function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`command-surface rounded-2xl border border-slate-700/70 p-6 shadow-xl shadow-slate-950/20 transition duration-300 ease-out hover:border-slate-600/90 hover:shadow-2xl hover:shadow-cyan-950/20 ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;
