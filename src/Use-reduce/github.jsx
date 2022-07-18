import { useEffect, useReducer } from "react";

const initvalue = {
  isloading: false,
  iserror: false,
  data: [],
  token: "",
};

let GithubComponent = () => {
  const [state, dispach] = useReducer(gihubReducer, initvalue);
  const [text, settext] = useEffect("");

  return (
    <div>
      <div>
        <input
          value="text"
          onChange={(e) => settext(e.target.value)}
          type="text"
          placeholder="Tipe somethinge"
        />
      </div>
      <button onClick={() => fetchUser(dispach, text)}>Search</button>
      <div>
        {state.data.map((item)=>(
        <div key={item.login}>{item.login}</div>
        ))}
      </div>
    </div>
  );
};

export default GithubComponent;