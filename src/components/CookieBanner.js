import React, { useCallback, useMemo } from 'react';
import { useTransition, animated } from 'react-spring';
import { useCookies } from 'react-cookie';

import { Link } from "./Link"

export const CookieBanner = () => {
  const [cookies, setCookie] = useCookies(['cookies_consent']);

  const transitions = useTransition(!cookies['cookies_consent'], null, {
    from: { opacity: 0, transform: 'translateY(100%)' },
    enter: { opacity: 1, transform: 'translateY(0)' },
    leave: { opacity: 0, transform: 'translateY(100%)' },
  });

  const expirationDate = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() + 365);
    return date;
  }, []);

  const handleClick = useCallback(() => {
    setCookie('cookies_consent', true, { path: '/', expires: expirationDate });
  }, [expirationDate, setCookie]);

  return transitions.map(
    ({ item, key, props }) =>
      item && (
        <animated.div
          key={key}
          style={props}
          className="fixed bottom-1 left-0 z-50 w-full"
        >
          <div className="row cookie-wrapper">
            <p className="text-center text-white text-xsm">
              We use <Link to='/privacy-policy'><b>cookies</b></Link> to help improve your online experience
            </p>
            <div className="flex justify-center">
              <button
                className="btn-red btn-medium btn-rounded"
                onClick={handleClick}
              >
                <span className="uppercase ">ACCEPT COOKIES</span>
              </button>
            </div>
          </div>
        </animated.div>
      )
  );
};
