import React from "react";

function Header(props) {
  return (
    <header id="headerType" className={`header__wrap ${props.fonts}`}>
      <div className="header__inner">
        <div className="header__logo clearfix">
          <a href="/">
            jeju <em>sari</em>
          </a>
        </div>
        <nav className="header__menu">
          <ul>
            <li>
              <a href="/sliderType">슬라이드 영역</a>
            </li>
            <li>
              <a href="/imageType">이미지 영역</a>
            </li>
            <li>
              <a href="/imgTextType">이미지/텍스트 영역</a>
            </li>
            <li>
              <a href="/cardType">카드 영역</a>
            </li>
            <li>
              <a href="/bannerType">배너 영역</a>
            </li>
            <li>
              <a href="/textType">텍스트 영역</a>
            </li>
            <li>
              <a href="/footerType">푸터 영역</a>
            </li>
          </ul>
        </nav>
        <div className="header__member clearfix">
          <a href="/">로그인</a>
        </div>
        <div className="header__ham">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}

export default Header;
