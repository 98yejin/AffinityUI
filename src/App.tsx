import React, { useState } from "react";
import { Notification } from "./components/Notification";

const App: React.FC = () => {
  const [showNotification, setShowNotification] = useState(true);

  const handleClose = () => {
    setShowNotification(false);
  };

  return (
    <div>
      {showNotification && (
        <Notification
          message="This is a success message!"
          type="success"
          onClose={handleClose}
          autoDismiss={true}
          autoDismissTime={1000}
        />
      )}
    </div>
  );
};

export default App;
