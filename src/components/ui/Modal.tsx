import type { ModalState } from '../../types';

interface Props {
  modal: ModalState;
  onClose: () => void;
}

export function Modal({ modal, onClose }: Props) {
  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/90 z-[999] transition-opacity duration-300 ${
          modal.isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />
      <button
        type="button"
        onClick={onClose}
        aria-label="Fechar"
        className={`fixed top-6 right-8 z-[1001] text-4xl leading-none text-white transition-all duration-300 hover:scale-110 hover:text-kriolu-accent ${
          modal.isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        &times;
      </button>
      <div
        className={`fixed top-1/2 left-1/2 z-[1000] flex flex-col items-center transition-all duration-300 ${
          modal.isOpen
            ? 'opacity-100 pointer-events-auto -translate-x-1/2 -translate-y-1/2 scale-100'
            : 'opacity-0 pointer-events-none -translate-x-1/2 -translate-y-1/2 scale-75'
        }`}
      >
        <img
          src={modal.image}
          alt={modal.title}
          className="w-[500px] max-w-[90vw] max-h-[65vh] object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.9)]"
        />
        <div className="w-[500px] max-w-[90vw] flex flex-col items-center gap-2 pt-4">
          <div className="text-xl font-bold text-white text-center">{modal.title}</div>
          <a
            href={modal.link}
            target="_blank"
            rel="noreferrer"
            className="text-[15px] text-kriolu-accent hover:text-kriolu-accentSoft hover:underline transition-colors"
          >
            {modal.link}
          </a>
        </div>
      </div>
    </>
  );
}