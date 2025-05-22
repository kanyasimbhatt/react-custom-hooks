// useForm: This hook manages form state and handles changes and submission logic.
//  const { values, handleChange, handleSubmit, resetForm } = useForm(initialValues, onSubmit);

import { ChangeEvent, FormEvent, useRef, useState } from "react";

const useForm = (
  initialValue: Record<string, unknown>,
  onSubmit: (...args: unknown[]) => unknown
) => {
  const [values, setValues] = useState<Record<string, unknown>>(initialValue);
  const issue = useRef(false);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    changedElement: keyof typeof values
  ) => {
    setValues({ ...values, [changedElement]: event.target.value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    issue.current = false;
    for (const a of Object.values(values)) {
      if (!a) {
        issue.current = true;
        break;
      }
    }
    if (!issue.current) onSubmit();
  };

  const resetForm = () => {
    const inputs: Record<string, unknown> = { ...values };
    for (const a of Object.entries(values)) {
      inputs[a[0]] = "";
    }
    setValues({ ...inputs });
  };

  return [values, handleChange, handleSubmit, resetForm] as const;
};

export default useForm;
