import React from "react";

function row({
  rowdata,
  index,
  editView,
  updateTable,
  setCurRow,
  setErrors,
  setShowModal
}) {
  const deleteRow = currentRow => {
    setCurRow(currentRow);
    setShowModal(true);
  };
  const onEditRow = rowIndex => {
    editView(true);
    setCurRow(rowIndex);
    setErrors(null);
  };
  return (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{rowdata.name}</td>
      <td>{rowdata.email}</td>
      <td>
        <button onClick={() => onEditRow(index)}>Edit</button> |
        <button onClick={() => deleteRow(index)}>Delete</button>
      </td>
    </tr>
  );
}

export default row;
