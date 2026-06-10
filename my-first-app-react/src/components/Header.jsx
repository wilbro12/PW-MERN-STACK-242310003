"use client";
export default function Header({ handleAdd }) {
  return (
    <div>
      <h1>Book Management</h1>

      <button onClick={handleAdd}>
        Add New Book
      </button>
    </div>
  );
}