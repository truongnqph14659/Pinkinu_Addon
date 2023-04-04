import React from 'react';
import { useModal } from 'src/hooks';

const BuyWithEth = () => {
  const { showModal } = useModal();
  return (
    <div>
      <button
        onClick={() =>
          showModal({
            content: (
              <>
                <p>Pinky </p>
              </>
            ),
            hiddenCloseBtn: true,
          })
        }
      >
        Buy now
      </button>
    </div>
  );
};

export default BuyWithEth;
