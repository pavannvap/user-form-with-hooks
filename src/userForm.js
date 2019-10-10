import React, { useState, useEffect } from "react";

function userForm({ editView, data, curRow, addRow, editRow }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState(null);
  useEffect(() => {
    setName(data.length > 0 ? data[curRow].name : "");
    setEmail(data.length > 0 ? data[curRow].email : "");
  }, []);
  const onEdit = e => {
    e.preventDefault();
    if (name !== "" || email !== "") {
      const data = { name: name, email: email };
      editRow(data, curRow);
      editView(false);
    } else {
      setErrors("Please Enter your details");
      editView(true);
    }
  };
  const onAdd = () => {
    let data;
    if (name !== "" || email !== "") {
      data = { name: name, email: email };
      addRow(data);
      editView(false);
    } else {
      setErrors("Please Enter your details");
      editView(true);
    }
  };
  const onClear = () => {
    setName("");
    setEmail("");
  };
  const onCancel = () => {
    editView(false);
  };
  return (
    <div>
      <p className="form-errors">{errors}</p>
      <form className="user-form">
        <div className="field">
          <label>User Name: </label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label>email: </label>
          <input
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="field">
          {data.length ? (
            <input type="button" value="update" onClick={e => onEdit(e)} />
          ) : (
            undefined
          )}
          <input type="button" value="Add" onClick={e => onAdd(e)} />
          <input type="button" value="Clear" onClick={e => onClear(e)} />
          <input type="button" value="Cancel" onClick={e => onCancel(e)} />
        </div>
      </form>
    </div>
  );
}

export default userForm;
