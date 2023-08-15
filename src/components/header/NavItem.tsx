const NavItem = ({ title, linkTo }: { title: string; linkTo: string }) => {
  return (
    <li>
      <a href={linkTo}>{title}</a>
    </li>
  );
};

export default NavItem;
