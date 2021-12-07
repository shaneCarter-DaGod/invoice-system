import React from 'react';
import './page.style.scss';
import { useMediaQuery } from 'react-responsive';
export const Page = () => {
  const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  return (
    <div className='page'>
      <h1>Hello am page...</h1>
      {/*       {(isTabletOrMobile && <section className='small'></section>) ||
        (isBigScreen && <section className='big'></section>)} */}
    </div>
  );
};
