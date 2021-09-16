import { useState } from 'react';

const useModalControls = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return {
    isModalOpen,
    closeModal: () => setIsModalOpen(false),
    openModal: () => setIsModalOpen(true),
  };
};

export default useModalControls;
