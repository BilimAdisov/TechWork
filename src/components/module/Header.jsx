import Logo from "../../assets/svg/logo.svg";

export const HeaderComponent = () => {
  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="header-logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="header-menu">
          <ul className="menu-list">
            <li className="menu-item">Главная</li>
            <li className="menu-item">Наши работы</li>
            <li className="menu-item">Услуги</li>
            <li className="menu-item">О нас</li>
            <li className="menu-item">Контакты</li>
          </ul>
        </div>
      </div>
    </header>
  );
};