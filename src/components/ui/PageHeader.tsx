interface PageHeaderProps {
  title: string;
  subtitle: string;
}

function PageHeader({
  title,
  subtitle,
}: PageHeaderProps) {
  return (
    <div className="mb-8 max-w-3xl">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">CityVerse AI</p>
      <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h1>

      <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-base">
        {subtitle}
      </p>
    </div>
  );
}

export default PageHeader;
