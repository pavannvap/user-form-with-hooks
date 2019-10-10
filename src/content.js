import React, { useState } from "react";

import UserForm from "./userForm";
import TableView from "./tableView";
import Modal from "./modal";

const data = [
  {
    name: "Pavan",
    email: "pavan.nvap@gmail.com"
  },
  {
    name: "Raghu",
    email: "raghu.g@gmail.com"
  }
];

function Content() {
  const [editView, setEditView] = useState(false);
  const [curRow, setCurRow] = useState(-1);
  const [showModal, setShowModal] = useState(false);

  const [employeeData, setEmplData] = useState(data);

  const deleteRow = curIndex => {
    const newEmplData = [...employeeData];
    newEmplData.splice(curIndex, 1);
    setEmplData(newEmplData);
  };

  const addRow = data => {
    const newEmplData = [...employeeData];
    newEmplData.push({ name: data.name, email: data.email });
    setEmplData(newEmplData);
  };

  const editRow = (data, index) => {
    const newEmplData = [...employeeData];
    newEmplData[index].name = data.name;
    newEmplData[index].email = data.email;
    setEmplData(newEmplData);
  };

  return (
    <div className="app">
      {showModal && (
        <Modal
          deleteRow={deleteRow}
          curRow={curRow}
          setShowModal={setShowModal}
        />
      )}
      {!editView ? (
        <TableView
          data={employeeData}
          editView={setEditView}
          updateTable={deleteRow}
          setCurRow={setCurRow}
          setShowModal={setShowModal}
        />
      ) : (
        <UserForm
          editView={setEditView}
          curRow={curRow}
          data={employeeData}
          addRow={addRow}
          editRow={editRow}
        />
      )}
    </div>
  );
}

export default Content;
