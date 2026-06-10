
"use client";

import { useState } from "react";
import Form from "@/components/Form";

export default function Page() {
  const [showForm, setShowForm] = useState(false);

  const handleAdd = () => {
    setShowForm(true);
  };

  return (
    <div>
      <h1>Books Page</h1>

      <button onClick={handleAdd}>
        Add New Book
      </button>

      {showForm && <Form />}
    </div>
  );
}