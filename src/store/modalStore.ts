import { create } from 'zustand';

interface ModalStore {
  isShowModal: boolean;
  handleModal: () => void;
}

const useModalStore = create<ModalStore>((set) => ({
  isShowModal: false,
  handleModal: () => set((state) => ({ isShowModal: !state.isShowModal })),
}));

export default useModalStore;
