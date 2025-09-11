import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = ({ extra = [] }) => {
  const location = useLocation();
  const segments = location.pathname
    .split('/')
    .filter(Boolean)
    .filter((seg) => seg !== 'category');

  const crumbs = [{ name: 'Home', path: '/' }];

  segments.forEach((seg, idx) => {
    const path = '/' + segments.slice(0, idx + 1).join('/');
    crumbs.push({ name: decodeURIComponent(seg), path });
  });

  extra.forEach((name) => {
    if (name) {
      crumbs.push({ name });
    }
  });

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {crumbs.map((c, idx) => (
          <li key={idx} className="breadcrumb-item">
            {c.path && idx !== crumbs.length - 1 ? (
              <Link to={c.path}>{c.name}</Link>
            ) : (
              c.name
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
