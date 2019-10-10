import React from "react";
import RowView from "./row";

function tableView({ data, editView, updateTable, setCurRow, setShowModal }) {
  return (
    <div>
      {data.length > 0 ? (
        <table className="table-view">
          <tbody>
            <tr>
              <td>No.</td>
              <td>Name</td>
              <td>Email address</td>
              <td>Actions</td>
            </tr>
            {data.map((rowdata, index) => (
              <RowView
                key={index}
                rowdata={rowdata}
                index={index}
                editView={editView}
                updateTable={updateTable}
                setCurRow={setCurRow}
                setShowModal={setShowModal}
              />
            ))}
          </tbody>
        </table>
      ) : (
        <>
          <p>there are no records</p>
          <button type="button" onClick={() => editView(true)}>
            Do you wanna Add new employee
          </button>
        </>
      )}
    </div>
  );
}

export default tableView;
