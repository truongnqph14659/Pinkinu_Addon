import { useModal } from 'src/hooks';
import DefaultButton from '../DefaultButton';

const ConnectWalletModal = () => {
  // const { connect } = useConnectWallet();
  const { closeModal } = useModal();

  return (
    <div className="grid gap-8">
      <div>
        <h1 className="text-2xl font-bold">{'wallet.wallet'}</h1>
        <div className="flex justify-center gap-3">
          <div className="text-center">
            <img
              className="mb-2 h-8 w-8"
              src="/images/icons/metamask.svg"
              alt="metamask"
            />
            <p className="font-semibold tracking-wider">Metamask</p>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-2xl font-bold">{'wallet.network'}</h1>
        <div className="flex justify-center gap-3">
          <div className="text-center">
            <img
              className="mb-2 h-8 w-8"
              src="/images/icons/bnb.svg"
              alt="bnb"
            />
            <p className="font-semibold tracking-wider">BNB</p>
          </div>
        </div>
      </div>
      <DefaultButton
        className="font-bold"
        text={'wallet.connect'}
        onClick={() => {
          // connect();
          closeModal();
        }}
      />
    </div>
  );
};

export default ConnectWalletModal;
