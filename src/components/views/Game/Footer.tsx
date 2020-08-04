import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="widther grid grid-of-4">
        <div className="grid-4 footer-left">
          <a href="/">
            <div className="footer-left-logo"></div>
          </a>
          <div className="paragraph">Монополия — бесплатная онлайн-игра.</div>
          <div className="paragraph">
            Все бренды и торговые марки на этой странице принадлежат
            правообладателям и размещены на правах рекламы.
          </div>
        </div>
        <div className="grid-2">
          <div className="title title-4">Материалы</div>
          <div className="paragraph">
            <a href="/pages/rules">Правила Сайта</a>
          </div>
          <div className="paragraph">
            <a href="/pages/how-to-play">Как тут играть</a>
          </div>
          <div className="paragraph">
            <a href="/pages/guidelines">О нарушениях</a>
          </div>
          <div className="paragraph">
            <a href="/pages/inventory">Об инвентаре</a>
          </div>
          <div className="paragraph">
            <a href="/pages/ranks">Звания</a>
          </div>
        </div>
        <div className="grid-2">
          <div className="title title-4">&nbsp;</div>
          <div className="paragraph">
            <a href="/m1api.pdf" target="_blank">
              Документация API
            </a>
          </div>
          <div className="paragraph">
            <a href="/health">Статус Сайта</a>
          </div>
        </div>
        <div className="grid-4">
          <div className="title title-4">Соцсети</div>
          <div className="paragraph footer-icons">
            <a href="https://vk.com/monopolyone">
              <img
                alt=""
                className="footer-icons-one"
                src="//cdn2.kirick.me/libs/monopoly/social/vk.svg"
              />
            </a>
            <a
              href="/away/aHR0cHM6Ly9tMS5nZy9kaXNjb3Jk"
              target="_blank"
              rel="noopener"
            >
              <img
                alt=""
                className="footer-icons-one"
                src="//cdn2.kirick.me/libs/monopoly/social/discord.svg"
              />
            </a>
          </div>
          <div className="paragraph">
            Подписывайтесь на Монополию в соцсетях, чтобы быть в курсе
            обновлений игры.
          </div>
        </div>
      </div>
    </div>
  );
}
