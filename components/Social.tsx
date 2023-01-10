type Props = {
  socialName: string;
  href: string;
};

const Social = ({ socialName, href }: Props) => {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {socialName}
    </a>
  );
};

export default Social;
