import { useMemo } from 'react';
import { usePathname, useRouter } from 'next/navigation';
//== Modules
import Cookies from 'universal-cookie';

export default function useLogic() {
  const pathName = usePathname();
  const router = useRouter();
  const cookies = useMemo(() => new Cookies(), []);

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  function switchLang(lang: string) {
    cookies.set('your-locale', lang, { path: '/' })
    router.push(redirectedPathName(lang))
  }

  return {
    switchLang
  }
}