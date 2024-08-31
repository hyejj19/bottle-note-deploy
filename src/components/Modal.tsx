import Image from 'next/image';
import BackDrop from '@/components/BackDrop';
import useModalStore from '@/store/modalStore';
import { Button, DualButton } from '@/components/Button';

interface Props {
  children?: React.ReactNode;
}

function Modal({ children }: Props) {
  const { handleCloseModal, state } = useModalStore();

  const handleOkayClick = () => {
    if (state.handleConfirm) state.handleConfirm();
    else handleCloseModal();
  };

  const handleCancelClick = () => {
    if (state.handleCancel) state.handleCancel();
    else handleCloseModal();
  };

  return (
    <BackDrop isShow={state.isShowModal}>
      <div className="w-full h-full flex flex-col justify-center items-center px-4 gap-3">
        <section className="relative w-full min-h-52 pt-16 pb-4 bg-white rounded-xl text-center flex flex-col items-center space-y-4 px-4">
          <article className="absolute top-[-10px]">
            <Image
              src="/icon/logo-subcoral.svg"
              alt="bottle_logo"
              width={40}
              height={55}
            />
          </article>
          {children}
          <p className="modal-mainText">{state.mainText}</p>
          <p className="modal-subText">{state.subText}</p>
          {state.type === 'ALERT' ? (
            <Button btnName={state.alertBtnName} onClick={handleOkayClick} />
          ) : (
            <DualButton
              onClickCancel={handleCancelClick}
              onClickOkay={handleOkayClick}
              okayBtnName={state.confirmBtnName}
              cancelBtnName={state.cancelBtnName}
            />
          )}
        </section>
      </div>
    </BackDrop>
  );
}

export default Modal;
