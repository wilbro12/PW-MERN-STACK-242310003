"use client";

export default function Form() {
  return (
    <form>
      <div>
        <label>Book Title</label>
        <input type="text" />
      </div>

      <div>
        <label>Author Name</label>
        <input type="text" />
      </div>

      <div>
        <label>Type Book</label>
        <input type="text" />
      </div>

      <div>
        <label>Synopsis</label>
        <textarea />
      </div>

      <div>
        <label>Story</label>
        <textarea />
      </div>

      <div>
        <label>Upload Image</label>
        <input type="file" />
      </div>

      <button type="submit">
        Submit Book
      </button>
    </form>
  );
}