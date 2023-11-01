'use client';
//== Components
import { LangSwitch, ModeSwitch } from "@/components";
import { Icon } from '@iconify/react';
//== I18n
import getDictionary from "@/dictionaries/clientDictionary";

function Navbar() {
  const { translations, locale } = getDictionary();

  return (
    <div>
      <LangSwitch />
      <ModeSwitch />
      <p><Icon icon="material-symbols:reset-wrench" /> {translations.welcome}</p>
      <p>{locale}</p>
    </div>
  )
}

export default Navbar
