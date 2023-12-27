'use client'
// import Image from 'next/image'
import styles from './page.module.css'
import Typed from 'typed.js';
import { useEffect, useState } from 'react';

export default function Home() {
  const [initialLoad, setInitialLoad] = useState(false);

  useEffect(() => {
    if (!initialLoad)
      var typed = new Typed('#typed', {
        strings: ['Engineer. Designer. Leader.', 'Student. Dreamer. Mentor.', 'Brother. Husband. Friend.'],
        typeSpeed: 90
      });

      setInitialLoad(true);
  }, [setInitialLoad, initialLoad]);

  return (
    <>
    <div style={{margin: 'auto', width: '100%', justifyContent: 'center', display: 'flex', marginTop: '5rem'}}>
        <span id="typed" className={styles.typed} />
    </div>
      <div className={styles.wrapper}>

        <div style={{margin: 'auto', display: 'flex', flexDirection: 'column', gap: '2rem'}}>
          <a href="https://github.com/Haeven" style={{color: 'blueviolet', cursor: 'pointer'}}>github.com/Haeven</a>
        </div>
      </div>
    </>
  )
}

