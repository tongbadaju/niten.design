export const slideUpDown = {
  initial: { y: '-100%', opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } },
  exit: { y: '100%', opacity: 0, transition: { duration: 0.4, ease: 'easeIn' } },
};
