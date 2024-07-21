import { create } from 'zustand';

interface ModalStore {
  showModal: boolean;
  handleModal: () => void;
}

const useModalStore = create<ModalStore>((set) => ({
  showModal: false,
  handleModal: () => set((state) => ({ showModal: !state.showModal })),
}));

export default useModalStore;
