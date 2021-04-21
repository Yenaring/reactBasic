import React, { useContext, useRef } from "react";
import { UserDispatch } from "./App.js";
import useInputs from "./useInputs";

function CreateUser() {
  const [form, onChange, reset] = useInputs({
    username: "",
    email: "",
  });

  const { username, email } = form;
  const nextId = useRef(4);

  const dispatch = useContext(UserDispatch);

  return (
    <div>
      <input
        name="username"
        placeholder="계정명을 입력해주세요."
        onChange={onChange}
        value={username}
      />
      <input
        name="email"
        placeholder="Email을 입력하세요."
        onChange={onChange}
        value={email}
      />
      <button
        onClick={() => {
          dispatch({
            type: "CREATE_USER",
            user: {
              id: nextId.current,
              username,
              email,
            },
          });
          nextId.current += 1;
          reset();
        }}
      >
        등록
      </button>
    </div>
  );
}

//props 가 바뀔 때만 렌더링해줍니다.
export default React.memo(CreateUser);
