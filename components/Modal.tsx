// components/Modal.tsx
import React, { useCallback, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const modalWrapperRef = useRef<HTMLDivElement>(null);

  const backDropHandler = useCallback(
    (e: MouseEvent) => {
      if (modalWrapperRef.current && !modalWrapperRef.current.contains(e.target as Node)) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        window.addEventListener('click', backDropHandler);
      });
    }
    return () => {
      window.removeEventListener('click', backDropHandler);
    };
  }, [isOpen, backDropHandler]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div ref={modalWrapperRef} className="modal-wrapper">
        <div className="modal">
          <div className="modal-header">
            <button onClick={onClose}>x</button>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>,
    document.getElementById('modal-root') as HTMLElement
  );
};

export default Modal;
