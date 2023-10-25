import { createContext, useState } from "react";

const Context = createContext({});
export default Context;

export function AppContext({ children }) {
  const [availability, setAvailibility] = useState(false);
  return (
    <Context.Provider values={{ availability, setAvailibility }}>
      {children}
    </Context.Provider>
  );
}
