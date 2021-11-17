import React from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '../assets/css/layout.css';
import '../assets/css/base.scss';

import { CookieBanner } from '../components/CookieBanner';

export const Layout = ({ children }) => (
  <main className="antialiased">
    {children} <CookieBanner />
  </main>
);
