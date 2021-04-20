import React from "react";

function CreateUser({ username, email, onChange, onCreate }) {
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
      <button onClick={onCreate}>등록</button>
    </div>
  );
}

//props 가 바뀔 때만 렌더링해줍니다.
export default React.memo(CreateUser);
