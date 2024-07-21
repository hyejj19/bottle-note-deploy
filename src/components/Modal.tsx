import Image from 'next/image';
import BackDrop from '@/components/BackDrop';
import useModalStore from '@/store/modalStore';
import { Button, DualButton } from '@/components/Button';

interface Props {
  type?: 'alert' | 'confirm';
  children: React.ReactNode;
  alertBtnName?: string;
  handleCancel?: () => void;
  handleConfirm?: () => void;
  confirmBtnName?: string;
  cancelBtnName?: string;
}

function Modal({
  type = 'alert',
  children,
  handleCancel,
  handleConfirm,
  alertBtnName = '확인',
  confirmBtnName,
  cancelBtnName,
}: Props) {
  const { showModal, handleModal } = useModalStore();

  const handleOkayClick = () => {
    if (handleConfirm) handleConfirm();
    else handleModal();
  };

  const handleCancelClick = () => {
    if (handleCancel) handleCancel();
    else handleModal();
  };

  return (
    <BackDrop isShow={showModal}>
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
          {type === 'alert' ? (
            <Button btnName={alertBtnName} onClick={handleOkayClick} />
          ) : (
            <DualButton
              onClickCancel={handleCancelClick}
              onClickOkay={handleOkayClick}
              okayBtnName={confirmBtnName}
              cancelBtnName={cancelBtnName}
            />
          )}
        </section>
      </div>
    </BackDrop>
  );
}

export default Modal;
