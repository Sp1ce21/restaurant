import "./style.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="container__1200">
        <div className="header__row">
          <div className="header__left">Reserve</div>
          {/* <nav className="header__nav">
            <ul className="header__list">
              <li className="header__point">
                <NavLink to="/serve/table">Book Table</NavLink>
              </li>
              <li className="header__point">
                <NavLink to="/serve/contacts">Contact Us</NavLink>
              </li>
            </ul>
          </nav> */}
          <div className="header__right">Table</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
