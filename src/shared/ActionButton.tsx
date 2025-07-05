import React from "react"
import { SelectedPage } from "./types"
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    children: React.ReactNode;
    setSelectedPage: (value: SelectedPage) => void;
}

const ActionButton = ({ children, setSelectedPage, }: Props) => {
  return (
    <AnchorLink className="rounded-md bg-Secondary-500 px-10 py-2 hover:bg-Primary-500 hover:text-white"
    onClick={( ) => setSelectedPage(SelectedPage.ContactUs)}
    href="#contactus">
        {children}
    </AnchorLink>
  );
};
export default ActionButton