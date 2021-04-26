import Link from "./Link";

const NavigationMenu = (props) => {
  return (
    <nav>
      <div>
        <Link name="Lien" />
        <Link name="Link" />
        <Link name="Linken" />
      </div>
      <div>
        <Link name="Loukoum" />
      </div>
    </nav>
  );
};

export default NavigationMenu;
