import React from "react";

export default function Flames() {
  const onClearHandler = () => {};

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const firstName = formData.get("firstName");
    const secondName = formData.get("secondName");
    console.log(firstName, secondName);
  };

  return (
    <section>
      <span>Flames Component</span>
      <form name="flames_form" onSubmit={onSubmitHandler}>
        <div>
          <label>Your Name</label>
          <input type="text" name="firstName" />
        </div>
        <div>
          <label>Parter Name</label>
          <input type="text" name="secondName" />
        </div>
        <button type="submit">Flames</button>
        <button onClick={onClearHandler}>Reset</button>
      </form>
    </section>
  );
}
