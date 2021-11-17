import classNames from 'classnames';
import React from 'react';
import { useMenuState, Menu, MenuItem, MenuButton } from 'reakit/Menu';
import CaretDown from '../assets/svg/caret-down.svg';
import USAIcon from '../assets/svg/countries/usa.svg';
import FrIcon from '../assets/svg/countries/fr.svg';
import RuIcon from '../assets/svg/countries/ru.svg';
import ItIcon from '../assets/svg/countries/it.svg';

const languagesConfig = {
  en: {
    label: 'English',
    prefix: '',
    icon: <USAIcon />,
  },
  ru: {
    label: 'Русский',
    prefix: 'ru/',
    icon: <RuIcon />,
  },
  fr: {
    label: 'Français',
    prefix: 'fr/',
    icon: <FrIcon />,
  },
  it: {
    label: 'Italiano',
    prefix: 'it/',
    icon: <ItIcon />,
  },
};

export const LangDropdown = ({ currentLang, langs }) => {
  const menu = useMenuState();

  return (
    <div className="lang-select">
      <MenuButton
        className="flex items-center justify-between px-4 lang-select__label"
        {...menu}
      >
        <div className="flex items-center gap-4 mr-4">
          {(languagesConfig[currentLang] &&
            languagesConfig[currentLang].icon) ||
            languagesConfig.en.icon}
          <span className="hidden md:block">
            {(languagesConfig[currentLang] &&
              languagesConfig[currentLang].label) ||
              languagesConfig.en.label}
          </span>
        </div>
        <CaretDown
          className={classNames('transform duration-200', {
            'rotate-180': !menu.visible,
          })}
        />
      </MenuButton>
      <Menu
        className="outline-none lang-select__list"
        {...menu}
        aria-label="Languages"
      >
        {langs
          ?.filter(
            (l) =>
              l.lang !== currentLang &&
              Object.keys(languagesConfig).includes(l.lang)
          )
          .map((lang) => (
            <MenuItem
              {...menu}
              key={lang.id}
              as="a"
              href={`/newsroom/${languagesConfig[lang.lang]?.prefix}${
                lang.slug
              }`}
              onClick={menu.hide}
              className="outline-none"
            >
              <div className="flex items-center gap-4 px-4 lang-select__item">
                {(languagesConfig[lang.lang] &&
                  languagesConfig[lang.lang].icon) ||
                  languagesConfig.en.icon}
                <span className="ml-4 md:ml-0">
                  {(languagesConfig[lang.lang] &&
                    languagesConfig[lang.lang].label) ||
                    languagesConfig.en.label}
                </span>
              </div>
            </MenuItem>
          ))}
      </Menu>
    </div>
  );
};
