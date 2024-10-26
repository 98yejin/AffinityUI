import React, { useState } from "react";
import { Modal } from "./components/Modal";
import { Button } from "./components/Button";

const App: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div>
      <Button onClick={openModal}>Open Modal with Border</Button>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Modal with Border"
      >
        <p>This modal has a border under the header.</p>
      </Modal>

      <Button onClick={() => setModalOpen(true)}>
        Open Modal without Border
      </Button>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="No Border"
        border={false}
      >
        <p>This modal does not have a border under the header.</p>
      </Modal>
    </div>
  );
};

export default App;
