import { Fade, Modal } from "@material-ui/core";

import React from "react";
import { gameModalStore } from "../../../../stores/Game/GameModalStore";
import { useStore } from "effector-react";

export default function CreateGameModal() {
  const isOpen = useStore(gameModalStore);
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isOpen}
      closeAfterTransition
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isOpen}>
        <div>
          <h2 id="transition-modal-title">Transition modal</h2>
          <p id="transition-modal-description">
            react-transition-group animates me.
          </p>
        </div>
      </Fade>
    </Modal>
  );
}
