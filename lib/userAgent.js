const MOBILE = /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/;
const TABLET = /(tablet|ipad|playbook|silk)|(android(?!.*mobile))/i;

export function isMobile(userAgent) {
  return MOBILE.test(userAgent);
}

export function isTablet(userAgent) {
  return TABLET.test(userAgent);
}
