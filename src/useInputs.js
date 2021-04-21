import { useReducer, useCallback } from "react";

function reducer(state, action) {
  switch (action.type) {
    //CHANGE
    case "CHANGE":
      return {
        ...state,
        [action.name]: action.value,
      };
    //RESET
    case "RESET":
      return {
        username: "",
        email: "",
      };
    default:
      throw new Error("Unhandled action!!");
  }
}

function useInputs(initialForm) {
  const [form, dispatch] = useReducer(reducer, initialForm);
  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    dispatch({
      type: "CHANGE",
      name,
      value,
    });
  }, []);

  // useSTate 사용(1)
  // const [form, setForm] = useState(initialForm);
  // const onChange = useCallback((e) => {
  //   const { name, value } = e.target;
  //   setForm((form) => ({ ...form, [name]: value }));
  // }, []);

  const reset = useCallback(() => {
    dispatch({
      type: "RESET",
    });
  }, []);

  // useSTate 사용(2)
  // const reset = useCallback(() => setForm(initialForm), [initialForm]);

  return [form, onChange, reset];
}

export default useInputs;
