import toast, { Toaster } from "react-hot-toast";
import { Formik, Form, Field } from "formik";
import css from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const onSubmitBar = async (values, actions) => {
    if (!values.query.trim()) {
      toast.error("Sorry, input is empty. Please try again!");
      return;
    }
    onSearch(values.query);
    actions.resetForm();
  };

  return (
    <div>
      <Toaster />
      <Formik initialValues={{ query: "" }} onSubmit={onSubmitBar}>
        <Form className={css.wrap}>
          <Field
            className={css.input}
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          ></Field>
          <button className={css.btn} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </div>
  );
}
