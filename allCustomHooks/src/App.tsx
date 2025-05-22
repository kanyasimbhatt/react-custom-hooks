import useForm from "./Hooks/useForm";

const initialValues = {
  name: "",
  password: "",
};

const App = () => {
  const [values, handleChange, handleSubmit, resetForm] = useForm(
    initialValues,
    onSubmit
  );

  function onSubmit() {
    console.log(values);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          value={values.name as string}
          onChange={(event) => handleChange(event, "name")}
        />

        <input
          type="password"
          id="password"
          value={values.password as string}
          onChange={(event) => handleChange(event, "password")}
        />

        <button type="submit">Submit</button>
        <button type="button" onClick={resetForm}>
          Reset Form
        </button>
      </form>
    </>
  );
};

export default App;
