import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login } = useAuth();

  const handleLogin = () => {
    login({ email: "test@test.com" });
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Mock Login</button>
    </div>
  );
};

export default Login;
