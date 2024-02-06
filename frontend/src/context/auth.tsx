import { createContext, useContext, useEffect, useState } from "react";
import { AuthContextData, LoginType, UserCreateType } from "../types/authContext";
import { api } from "../services/auth";;

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<object | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadStorageData() {
      const storageUser = localStorage.getItem("@Auth:user");
      const storageToken = localStorage.getItem("@Auth:access_token");

      if (storageUser && storageToken) {
        setUser(JSON.parse(storageUser));
      }
      setLoading(false);
    }

    loadStorageData();
  }, []);

  const Login = async ({ email, password }: LoginType) => {
    setLoading(true);
    try {
      const res = await api.post<{ token: string }>("/login", {
        email: email,
        password: password,
      });
  
      const userData = await api.get("/user", {
        headers: {
          Authorization: `Bearer ${res.data.token}`,
        },
      });
  
      const loggedInUser = userData.data.find((user: any) => user.email === email);
  
      if (!loggedInUser) throw new Error('User not found in users array');
  
      setUser(loggedInUser);
  
      localStorage.setItem("@Auth:access_token", res.data.token);
      localStorage.setItem("@Auth:user", JSON.stringify(loggedInUser));
    } catch (err) {
      console.error(err);
      console.log("Erro ao fazer login");
    } finally {
      window.location.reload();
      setLoading(false);
    }
  };

  const Logout = () => {
    localStorage.clear();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, loading, Login, Logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
