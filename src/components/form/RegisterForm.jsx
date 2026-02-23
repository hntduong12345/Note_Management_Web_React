import PropTypes from "prop-types";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function RegisterForm({
  email,
  setEmail,
  password,
  setPassword,
  onSubmit,
  error,
  loading,
}) {
  const [showPass, setShowPass] = useState(false);

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      {error && (
        <div className="p-3 rounded-lg bg-destructive/10 text-sm text-destructive">
          {error}
        </div>
      )}

      <div className="flex flex-col gap-1.5 mb-[1rem]">
        <label htmlFor="email" className="text-sm font-medium text-foreground">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="you@mail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-[2.4rem] w-[93%] px-[1rem] mt-[0.6rem] rounded-[0.6rem] border border-border bg-card 
                    text-foreground text-[0.9rem] placeholder:text-muted-foreground 
                    focus:outline-none focus:ring-2 focus:ring-ring/30 focus:border-ring 
                    transition-colors"
        />
      </div>
      <div className="flex flex-col gap-1.5 mb-[1rem]">
        <div className="flex items-center justify-between">
          <label
            htmlFor="password"
            className="text-sm font-medium text-foreground"
          >
            Password
          </label>
          <button
            type="button"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors 
                       bg-transparent border-0 outline-none shadow-none"
          >
            Forgot password?
          </button>
        </div>

        <div className="relative">
          <input
            id="password"
            type={showPass ? "text" : "password"}
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-[2.4rem] w-[93%] px-[1rem] mt-[0.6rem] rounded-[0.6rem] border border-border bg-card 
                    text-foreground text-[0.9rem] placeholder:text-muted-foreground 
                    focus:outline-none focus:ring-2 focus:ring-ring/30 focus:border-ring 
                    transition-colors"
          />
          <button
            type="button"
            onClick={() => setShowPass(!showPass)}
            className="absolute right-[0.8rem] top-[65%] -translate-y-1/2
                       text-muted-foreground hover:text-foreground
                       bg-transparent border-0 outline-none shadow-none"
          >
            {showPass ? (
              <Eye className="w-4 h-4" />
            ) : (
              <EyeOff className="w-4 h-4" />
            )}
          </button>
        </div>
        <p className="text-xs text-muted-foreground">
          Must be at least 8 characters
        </p>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="h-[2.4rem] w-full py-2.5 mb-[1rem] rounded-lg bg-primary text-primary-foreground
                   text-[0.9rem] font-medium hover:opacity-90 transition-opacity
                   disabled:opacity-50 mt-2"
      >
        {loading ? "Signing in..." : "Sign In"}
      </button>
    </form>
  );
}

RegisterForm.propTypes = {
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func,
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  loading: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
