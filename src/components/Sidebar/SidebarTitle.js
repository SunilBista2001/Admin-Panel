function SidebarTitle({ Icon, title }) {
  return (
    <>
      <ul className="nav nav-main">
        <li className="">
          <a
            className="nav-link flex items-center "
            href="layouts-default.html"
          >
            {Icon && <Icon />}
            <span className="ml-2">{title}</span>
          </a>
        </li>
      </ul>
    </>
  );
}

export default SidebarTitle;
