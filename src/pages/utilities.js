export const checkBrowser = () => {
  const userAgent = navigator.userAgent;
  const isChrome = userAgent.includes('Chrome') && !userAgent.includes('Edg');
  const isFirefox = userAgent.includes('Firefox');
  return { isChrome, isFirefox };
};
