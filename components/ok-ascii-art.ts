'use client';

import { useEffect, useRef } from 'react';

export const OkAsciiArt = () => {
  const hasLogged = useRef(false);

  useEffect(() => {
    if (!hasLogged.current) {
      console.log(`
   OOOOO   SSSSS  M   M   A   N   N      K   K   OOOOO   CCC
  O     O  S      MM MM  A A  NN  N      K  K   O     O C   C
  O     O   SSS   M M M AAAAA N N N      KKK    O     O C
  O     O      S  M   M A   A N  NN      K  K   O     O C   C
   OOOOO   SSSSS  M   M A   A N   N      K   K   OOOOO   CCC
                                                          C

  Check out my GitHub: https://github.com/osman-koc ♥
      `);
      hasLogged.current = true;
    }
  }, []);

  return null;
};
