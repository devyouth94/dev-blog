type Props = {
  title: string;
  desc?: string;
};

const PageTitle = ({ title, desc }: Props) => {
  return (
    <div className="flex items-baseline gap-3 pb-4">
      <h1 className="text-3xl font-bold capitalize">{title}</h1>
      {desc && <span className="text-gray-400 text-sm">{desc}</span>}
    </div>
  );
};

export default PageTitle;
