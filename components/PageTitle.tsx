type Props = {
  title: string;
  desc?: string;
};

const PageTitle = ({ title, desc }: Props) => {
  return (
    <div className="flex items-center gap-3 pt-2 pb-4">
      <h1 className="text-3xl font-bold">{title}</h1>
      {desc && <span className="text-gray-400">{desc}</span>}
    </div>
  );
};

export default PageTitle;
