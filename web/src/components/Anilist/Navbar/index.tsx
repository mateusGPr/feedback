import { Fire, Gear, MagnifyingGlass, Plus } from "phosphor-react";
import { FormEvent, ReactNode } from "react";
import "./index.css";

interface NavbarProps{
  handleSubmit: (event: FormEvent) => void;
  changeSearchText: (event: FormEvent) => void;
}

const NavBar = (props: NavbarProps) => {
  return (
    <div className="NavBar">
      <NavBarSearch {...props} />
    </div>
  );
};

const NavBarIcon = ({ icon, text }: { icon: ReactNode; text: string | null; }) => (
  <div className="NavBar-Icon group">
    {icon}
    <span className="NavBar-ToolTip group-hover:scale-100">
      {text}
    </span>
  </div>
);


const NavBarSearch = ({handleSubmit, changeSearchText}: NavbarProps) => {
  return (<form className="flex items-center justify-center"
      onSubmit={handleSubmit}>
    <div className="flex flex-row gap-0 mx-2 my-auto justify-center items-center">
      <input type="text" onChange={changeSearchText}
       className="placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1
                 outline-none p-1 h-8 mr-2" placeholder="Procurar" />
      
      <button type="submit" className="NavBar-Icon">
      <NavBarIcon icon={<MagnifyingGlass size="22" />} text="Procurar" />
      </button>
    </div>
  </form>)
}

const Divider = () => <hr className="NavBar-Divider" />;

export default NavBar;
