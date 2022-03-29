import React, { useEffect, useState } from "react";
import { Button, TextField } from "@material-ui/core";

import { collection, addDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../fireBase/config";

//hooks
import { useCollection } from "../../hooks/useCollection";

//components

export const DataBaseTest = ({ list }) => {
  const { document } = useCollection("books");

  const [data, setData] = useState(null);
  const [addBook, setNewBook] = useState("");

  useEffect(() => {
    const time = async () => {
      let a = await document;
      setData(a);
    };

    time();
  }, [document]);

  const handleSubmit = async(e) => {

    console.log(addBook)

    e.preventDefault();
    const ref = collection(db, 'books')

    await addDoc(ref, {
      title: addBook
    });

    setNewBook("");
  };

  const handleDel = async(id) =>{
      const ref = doc(db,'books',id);
      await deleteDoc(ref)
  }

  return (
    <div
      style={{
        margin: "20px",
        padding: "50px",
        backgroundColor: "white",
      }}
    >
        <h3>Select to delete</h3>
      {data &&
        data.map((x) => {
          return (
            <ul key={x.id}>
              <li style={{cursor:'pointer'}} onClick={ () => handleDel(x.id)} >{x.title}</li>
            </ul>
          );
        })}

      <TextField
        label="Add a Book"
        id="addBook"
        style={{
          margin: "20px",
          width: "300px",
        }}
        type="addBook"
        value={addBook}
        onChange={ (e) => setNewBook(e.target.value)}
      />
      <br />
      <Button
        variant="contained"
        style={{
          backgroundColor: "#4DD0A6",
          color: "white",
          margin: "20px",
        }}
        onClick={ e => handleSubmit(e)}
      >
        ADD
      </Button>
    </div>
  );
};
