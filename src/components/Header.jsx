const Header = ({ title, hierarchy = "h1", padding = 5, color = "dark" }) => {
  const tagToSize = {
    h1: "text-5xl",
    h2: "text-4xl",
    h3: "text-3xl",
    h4: "text-2xl",
    h5: "text-xl",
    h6: "text-lg",
  };
  const validTag = Object.keys(tagToSize);
  const Tag = validTag.includes(hierarchy) ? hierarchy : "h1";
  const size = tagToSize[Tag];

  return (
    <header className={`flex w-full items-center px-${padding}`}>
      <Tag className={`font-title font-medium ${size} text-${color} `}>
        {title}
      </Tag>
      <div className={`border-${color} ml-4 flex-grow border-t-2`}></div>
    </header>
  );
};

export default Header;
