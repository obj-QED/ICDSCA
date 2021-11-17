import React from 'react';
import classNames from 'classnames';
import VisibilitySensor from 'react-visibility-sensor';

export const News = (article) => {
  return (
    <article className="film_review">
      <header>
        <h2>Парк Юрского периода</h2>
      </header>
      <section className="main_review">
        <p>Динозавры были величественны!</p>
      </section>
      <section className="user_reviews">
        <article className="user_review">
          <p>Слишком страшно для меня.</p>
          <footer>
            <p>
              Опубликовано
              <time datetime="2015-05-16 19:00">16 мая</time>
              Лизой.
            </p>
          </footer>
        </article>
        <article className="user_review">
          <p>Я согласен, динозавры мои любимцы.</p>
          <footer>
            <p>
              Опубликовано
              <time datetime="2015-05-17 19:00">17 мая</time>
              Томом.
            </p>
          </footer>
        </article>
      </section>
      <footer>
        <p>
          Опубликовано
          <time datetime="2015-05-15 19:00">15 мая</time>
          Стаффом.
        </p>
      </footer>
    </article>
  );
};
