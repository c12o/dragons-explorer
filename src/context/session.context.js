import { useState, createContext, useEffect, useContext } from "react";

const LOCAL_STORAGE_IDENTIFIER = "@dragon-ui:authenticated-user";

const _retrievePersistedData = () => {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_IDENTIFIER));
};

const _setDataToPersist = (data) =>
  localStorage.setItem(LOCAL_STORAGE_IDENTIFIER, JSON.stringify(data));

const _clearPersistedData = () =>
  localStorage.removeItem(LOCAL_STORAGE_IDENTIFIER);

const sessionContext = createContext({
  user: null,
  login: (data) => {},
  logout: () => {},
});

const SessionProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!user) {
      const sessionData = _retrievePersistedData();
      sessionData && setUser(sessionData);
    }
  }, []);

  function login({ identifier, password, persistSession }) {
    if (identifier === "daenaerys" && password === "dracarys") {
      const userData = { name: "Daenerys Targaryen" };
      setUser(userData);
      persistSession && _setDataToPersist(userData);
      return;
    }

    throw Error("Credenciais inválidas");
  }

  function logout() {
    setUser(null);
    _clearPersistedData();
  }

  return (
    <sessionContext.Provider value={{ user, login, logout }}>
      {children}
    </sessionContext.Provider>
  );
};

const useSession = () => useContext(sessionContext);

export { useSession, SessionProvider };
