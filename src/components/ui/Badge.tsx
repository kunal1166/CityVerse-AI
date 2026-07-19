interface BadgeProps {
  text: string;
}

function Badge({ text }: BadgeProps) {
  return (
    <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-sm font-medium text-cyan-400">
      {text}
    </span>
  );
}

export default Badge;