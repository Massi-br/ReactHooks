import React, { useState } from "react";
import { useEffect } from "react";

function App() {
  const [checkb, setCheckb] = useState(true);

  return (
    <div className="container mt-5">
      <input
        type="checkbox"
        id="title"
        checked={checkb}
        onChange={() => setCheckb(!checkb)}
      />
      <label htmlFor="title">afficher le champs de titre</label>
      {checkb && <EditTitle />}
    </div>
  );
}

export default App;

function EditTitle() {
  const [title, setTitle] = useState("");
  const [firstname, setFirstname] = useState("");

  useEffect(() => {
    const original = document.title;

    return () => {
      document.title = original;
    };
  }, []);

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div className="vstack gap-2">
      <input
        placeholder="modifier le titre"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="prenom......."
        value={firstname}
        onChange={(e) => setFirstname(e.target.value)}
      />
    </div>
  );
}
