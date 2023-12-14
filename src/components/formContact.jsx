import React from "react";

function FormContact() {

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Formulario enviado")
    }
  return (
    <section className="max-w-3xl mx-auto mt-20">
      <form action="" className="px-10" onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" className="input-form mb-3" />
        <input type="mail" placeholder="Email" className="input-form mb-3" />
        <textarea
          placeholder="How Can We Help?"
          className="input-form relative h-40 resize-none"
          maxLength={150}
        />
        <button className=" px-3 w-40 py-2 rounded-md inline-block hover:bg-blue-400 hover:cursor-pointer font-bold text-center" style={{border: "solid", borderColor:"#ebe3d8", }}>
          {"submit"}
        </button>
      </form>
    </section>
  );
}

export default FormContact;
