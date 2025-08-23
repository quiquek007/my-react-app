import React from 'react';
import { Link } from 'react-router-dom';
import HoverBox from '../hover-box/hover-box.tsx';

export const Contacts: React.FC = () => (
  <>
    <h2>Кантакты:</h2>
    <ul>
      <li><Link to="/profile/1">Bruce Marshall Mathers III</Link></li>
      <li><Link to="/profile/2">Will Smith</Link></li>
      <li><Link to="/profile/3">Alice Johnson</Link></li>
    </ul>
    <section>
      <h2>Прыклад анімацыі</h2>
      <HoverBox />
    </section>
  </>
);