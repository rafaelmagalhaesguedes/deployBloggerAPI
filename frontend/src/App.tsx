import GlobalStyle from "./assets/css/GlobalStyle";
import { AuthProvider } from "./context/auth";
import { Routes } from "./routes";

function App() {
  return (
    <AuthProvider>
      <GlobalStyle />
      <Routes />
    </AuthProvider>
  );
}

export default App;
