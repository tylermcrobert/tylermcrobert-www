import { useEffect } from 'react';

export default function useClickAway({ open, setOpen }) {
  useEffect(() => {
    const close = () => {
      if (open) {
        setOpen(false);
      }
    };

    document.addEventListener('click', close);
    return (() => {
      document.removeEventListener('click', close);
    });
  }, [open]);
}
