import { useMemo } from 'react';
//== Modules
import Cookies from 'universal-cookie';

export default function useLogic() {
  const cookies = useMemo(() => new Cookies(), []);

  function switchMode(mode: string) {
    const otherMode = mode === 'light' ? 'dark' : 'light';
    cookies.set('your-mode', mode, { path: '/' });
    document.body.classList.toggle(mode);
    document.body.classList.remove(otherMode);
  }

  return {
    switchMode
  }
}