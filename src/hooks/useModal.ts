import { useCallback, useEffect, useState } from 'react';
import type { Artist, ModalState } from '../types';
import { buildArtistLink } from '../data/artists';

const INITIAL: ModalState = { isOpen: false, title: '', image: '', link: '' };

export function useModal() {
  const [state, setState] = useState<ModalState>(INITIAL);

  const open = useCallback((artist: Artist) => {
    setState({
      isOpen: true,
      title: artist.name,
      image: artist.img,
      link: buildArtistLink(artist),
    });
  }, []);

  const close = useCallback(() => setState(INITIAL), []);

  useEffect(() => {
    if (!state.isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close();
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [state.isOpen, close]);

  return { modal: state, openModal: open, closeModal: close };
}