interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="rounded-xl bg-cyan-500 px-5 py-2 font-semibold text-white transition hover:bg-cyan-400"
    >
      {children}
    </button>
  );
}

export default Button;