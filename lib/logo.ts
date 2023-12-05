import type { LogoProps } from '@ircsignpost/signpost-base/dist/src/header';
import type { Locale } from '@ircsignpost/signpost-base/dist/src/locale';

import logoBng from '../public/info-sheba-bangla.png';
import logo from '../public/info-sheba-logo.png';

export const getHeaderLogoProps = (currentLocale: Locale): LogoProps => {
  let imgSrc: string;
  switch (currentLocale.url) {
    case 'bn':
      imgSrc = logoBng.src;
      break;
    case 'en-us':
    default:
      imgSrc = logo.src;
      break;
  }
  return {
    src: imgSrc,
  };
};
