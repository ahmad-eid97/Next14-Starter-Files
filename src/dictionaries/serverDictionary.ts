import { headers } from 'next/headers'; // COOKIES FROM SERVER
import Cookies from 'universal-cookie';  // FOR PARSING COOKIES ONLY
//= Translations
import en from './en.json';
import ar from './ar.json';

export default function getDictionary() {
  const cookie = headers().get('cookie');
  const cookies = new Cookies(cookie, { path: '/' });
  const translations = (cookies.get('your-locale') || 'en') === 'ar' ? ar : en;
  return { translations, locale: cookies.get('your-locale') };
}