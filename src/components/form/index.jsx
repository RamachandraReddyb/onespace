import React, { useState } from "react";

const FormValidation = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);

  const EMAIL_REGEX = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

  const handleFormData = (e) => {
    e.preventDefault();
    if (!EMAIL_REGEX.test(email)) {
      alert("enter valid email!");
    } else {
      setIsValid(true);
    }
  };

  return (
    <>
      <form onSubmit={handleFormData}>
        <div className="mb-5">
          Form with validation
          <hr />
        </div>
        <input
          type="text"
          name="price"
          id="price"
          value={name}
          class="block mb-2 w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="name..."
          style={{ width: "40%", border: "1px solid orange" }}
          onChange={(e) => {
            setName(e.target.value);
            setIsValid(false);
          }}
        />
        <input
          type="text"
          name="email"
          id="email"
          value={email}
          class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="email..."
          style={{ width: "40%", border: "1px solid orange" }}
          onChange={(e) => {
            setEmail(e.target.value);
            setIsValid(false);
          }}
        />
        <button
          style={{
            border: "1px solid lightblue",
            background: "lightblue",
            padding: "10px",
            borderRadius: "4px",
            marginTop: "10px",
          }}
        >
          Submit
        </button>
      </form>
      {isValid && (
        <div>
          your Name : {name} <br />
          your Email: {email}
        </div>
      )}
    </>
  );
};

export default FormValidation;
