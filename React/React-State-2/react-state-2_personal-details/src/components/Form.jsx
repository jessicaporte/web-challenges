import { useState } from "react";

export default function Form({ onCreateUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onCreateUser(name, email);

    setName();
    setEmail();
  }

  return (
    <form
      className="form"
      aria-labelledby="user-details"
      onSubmit={handleSubmit}
    >
      <h2 id="user-details">Please enter your details here!</h2>
      <label htmlFor="name">Name: </label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="John Doe"
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="email">Email: </label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="john@doe.com"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="form__submit-button" type="submit">
        Submit
      </button>
    </form>
  );
}

/*et's start by fixing the submit event. Switch to the `./src/components/Form.jsx` file. You'll notice two state variables, `name` and `email`, as well as a `handleSubmit` function.

1. Extend the `handleSubmit` function to set the `name` and `email` state variables to their corresponding form field values.
2. Reset the form fields after submission.

### Lifting State Up

🎉 Congratulations, the submit functionality now works, and the data is stored in state variables!

However, the submitted details are not dynamically displayed in the [`App` component](./src/App.jsx) because the state currently lives only in the `Form` component.

Refactor the code so that:

1. When the form is submitted, the entered data is available in the `App` component.
2. The submitted data is dynamically displayed in the respective output fields below the form.

You can use the following hints as a guideline:

- Lift both states up to the `App` component.
- Write a `handleCreateUser` function, which takes two parameters, `name` and `email`, and uses them to update the states.
- Pass the `handleCreateUser` function to the `Form` component:
  - Hint: `onDelete={handleDelete}`
  - Ensure the `Form` component correctly receives this prop.
- Refactor the `handleSubmit` function in the `Form` component to call `onCreateUser` with the appropiate form field values as arguments.
- Finally, in the `App` component, dynamically render both states in the output fields below the form.
*/
