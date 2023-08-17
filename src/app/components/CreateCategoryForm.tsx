"use client";

import { FormEvent } from "react";

export function CreateCategoryForm() {
  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    const name = document.querySelector<HTMLInputElement>("#name")!.value;
    const description =
      document.querySelector<HTMLInputElement>("#description")!.value;
    console.log(name, description);

    await fetch("http://localhost:3000/api/categories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, description }),
    });
  }

  return (
    <form onSubmit={onSubmit}>
      <input name="name" id="name" placeholder="name" className="text-black" />
      <br />
      <br />
      <br />
      <input
        name="description"
        id="description"
        placeholder="description"
        className="text-black"
      />
      <br />
      <br />
      <br />
      <button type="submit">Criar</button>
    </form>
  );
}

export default CreateCategoryForm;
