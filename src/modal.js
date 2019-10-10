import React from "react";

function modal({ setShowModal, deleteRow, curRow }) {
  const onNo = () => {
    setShowModal(false);
  };
  const onYes = () => {
    deleteRow(curRow);
    setShowModal(false);
  };
  return (
    <div className="modal-wrapper">
      <div className="modal-window">
        <h3>Do you wanna delete really?</h3>
        <div>
          <button onClick={onYes}>Yes</button>
          <button onClick={onNo}>No</button>
        </div>
      </div>
    </div>
  );
}

export default modal;
