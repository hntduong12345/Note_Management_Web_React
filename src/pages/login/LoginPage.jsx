/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BrainCircuit } from "lucide-react";
import LoginForm from "../../components/form/LoginForm";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Email and Password are required!");
    }

    setLoading(true);
    //Call auth api to check auth information
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-[34rem] bg-background">
      <div className="w-full max-w-md p-[2.5rem] bg-card rounded-xl border border-border shadow-sm ">
        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <div
            className="flex items-center justify-center
                          w-[3rem] h-[3rem] rounded-md bg-primary mb-4"
          >
            <BrainCircuit className="w-6 h-6 text-primary-foreground" />
          </div>
          <h1 className="text-2xl mt-[1rem] font-bold text-foreground text-balance">
            Welcome back
          </h1>
          <p className="text-sm mb-[1rem] text-muted-foreground m-auto">
            Enter your credentials to access system
          </p>
        </div>

        {/* Login Form */}
        <LoginForm
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          onSubmit={handleSubmit}
          error={error}
          loading={loading}
        />

        <p className="text-center text-sm text-muted-foreground mt-6">
          {"Don't have an account? "}
          <a
            href="/register"
            className="font-semibold text-foreground hover:underline"
          >
            Create one
          </a>
        </p>
      </div>
    </div>
  );
}
