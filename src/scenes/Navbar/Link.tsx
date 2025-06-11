import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  selectedPage: string;
  setSelectedPage: (value: string) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowercasePage = page.toLowerCase().replace(/ /g, "");
  return (
    <AnchorLink
      className={`${selectedPage === lowercasePage ? "text-Primary-500" : ""}
        transition duration-500 hover:text-Primary-300
        `}
      href={`#${lowercasePage}`}
      onClick={() => setSelectedPage(lowercasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
