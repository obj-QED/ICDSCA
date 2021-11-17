import React, { useCallback, useEffect, useState } from "react"
import classNames  from "classnames";
import OutsideClickHandler from 'react-outside-click-handler';

import ImageAnaIsaeva from '../assets/images/persons/anna_isaeva.jpg';
import ImageChengBao from '../assets/images/persons/cheng_bao.jpg';
import ImageFrankMahoney from '../assets/images/persons/frank_mahoney.jpg';
import ImageGaryPalmer from '../assets/images/persons/gary_palmer.jpg';
import ImageNicolaSavoretti from '../assets/images/persons/nicola_savoretti.jpg';
import ImagePietroHagemann from '../assets/images/persons/pietro_hagemann.jpg';
import ImageVladimirKuvshinov from '../assets/images/persons/vladimir_kuvshinov.jpg';

import IconArrow from '../assets/svg/arrow.svg';
import IconCross from '../assets/svg/cross.svg';
import VisibilitySensor from "react-visibility-sensor"

const persons = [
  {
    image: ImageNicolaSavoretti,
    name: 'Nicola Savoretti',
    position: 'Chairman',
  },
  {
    image: ImageVladimirKuvshinov,
    name: 'DR. Vladimir Kuvshinov',
    position: 'Deputy Chairman',
  },
  {
    image: ImageChengBao,
    name: 'Dr. Cheng Bao​',
    position: 'CEO',
  },
  {
    image: ImageGaryPalmer,
    name: 'Gary Palmer',
    position: 'Technology & Payments Advisor',
  },
  {
    image: ImageAnaIsaeva,
    name: 'Dr. Anna Isaeva​',
    position: 'Chief Legal Officer',
  },
  {
    image: ImagePietroHagemann,
    name: 'Dr. Pietro Hagemann​',
    position: 'CTO',
  },
  {
    image: ImageFrankMahoney,
    name: 'Frank Mahoney​',
    position: 'Lead USA Representative',
  },
];

export const Leadership = () => {
  const [personToShow, setPersonToShow] = useState(null);
  const setPerson = useCallback((index, type) => {
    let newIndex;
    if (type === 'next') {
      newIndex = index === persons.length - 1 ? 0 : index + 1;
    }
    if (type === 'prev') {
      newIndex = index === 0 ? persons.length - 1 : index - 1;
    }

    setPersonToShow({ ...persons[newIndex], i: newIndex});
  }, []);

  const escFunction =  useCallback(event => { if(event.keyCode === 27) { setPersonToShow(null); } }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => { document.removeEventListener("keydown", escFunction, false); };
  }, [escFunction]);

  return (
    <div className="leadership">
      <div className="row">
        <div className="leadership__wrapper">
          <div className="leadership__heading">
            <VisibilitySensor partialVisibility>
              {({ isVisible: isVisibleScreen }) => (
                <h2 className={classNames("headline visibility-animation", { visible: isVisibleScreen })}><span>Leadership</span></h2>
              )}
            </VisibilitySensor>

            <p className="leadership__description">
              With over 100 years' experience in international rescue, mitigations and commerce, our structure counts now World Leading key individuals in its team
            </p>
          </div>

          <div className="leadership__persons">
            {persons.map((person, i) => (
              <button key={i} onClick={() => setPersonToShow({...person, i })} className="leadership__person-item">
                <img src={person.image} alt={person.name} className="leadership__person-image"/>
                <div className="leadership__person-name">{person.name}</div>
                <div className="leadership__person-position">{person.position}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <OutsideClickHandler
        onOutsideClick={() => { setPersonToShow(null); }}
      >
        <div className={classNames("leadership__person-details", { active: personToShow })}>
          {personToShow && (
            <div className="leadership__person-details-wrapper">
              <div className="leadership__person-details-content">
                <button onClick={() => setPersonToShow(null) } className="leadership__person-details-close"><IconCross /> </button>
                <img src={personToShow.image} alt={personToShow.name} className="leadership__person-details-image"/>
                <div className="leadership__person-details-name">{personToShow.name}</div>
                <div className="leadership__person-details-position">{personToShow.position}</div>
                <p className="leadership__person-details-description">At malesuada aenean elementum, ut quam. Facilisi lacinia ante sem mattis netus in massa pharetra sapien. Elementum metus nisl risus, cursus. Nulla placerat id diam proin ac massa. Sit eu eu nulla consectetur morbi consequat in eleifend. Lacus urna risus id vitae, ipsum lacus vitae arcu, ipsum.</p>
                <p className="leadership__person-details-description">Dictum a ultricies enim, purus nisl. Sit fringilla leo quis varius amet malesuada donec. Diam vel ultrices aliquam posuere cursus. Massa laoreet felis dolor enim tellus tellus rutrum. Viverra dolor odio egestas purus dui gravida odio magna.</p>


                <div className="leadership__person-details-controls">
                  <button className="leadership__arrow" onClick={() => setPerson(personToShow.i, 'prev')}><IconArrow /> </button>
                  <button className="leadership__arrow" onClick={() => setPerson(personToShow.i, 'next')}><IconArrow /> </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </OutsideClickHandler>
    </div>
  );
}
