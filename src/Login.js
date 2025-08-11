import React, { useState, useEffect, useRef } from 'react';

function Login() {
  const scrollref = useRef(null);
  useEffect(() => {
    if (scrollref.current) {
      scrollref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");  // add error state

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function handleSubmit(e) {
    e.preventDefault();
    setError(""); // Clear previous errors

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    // If validations pass
    alert(`Email: ${email}, Password: ${password}`);
  }

  return (
    <main ref={scrollref} style={{ padding: '2rem', maxWidth: '400px', margin: '0 auto' }} className="login-page">
      <form
        ref={scrollref}
        onSubmit={handleSubmit}  // Use onSubmit on form
        style={{ padding: '2rem', maxWidth: '400px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}
        noValidate
      >
        <label>Email: </label>
        <input
          type="email"
          name="email"
          placeholder="you@example.com"
          required
          style={{ width: '100%', padding: '0.5rem' }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password: </label>
        <input
          type="password"
          name="password"
          placeholder="password"
          required
          style={{ width: '100%', padding: '0.5rem' }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Show error message */}
        {error && <p style={{ color: 'red', fontWeight: 'bold' }}>{error}</p>}

        <button
          type="submit"
          style={{ padding: '0.75rem', backgroundColor: '#2E8B57', color: 'white', border: 'none', borderRadius: '4px' }}
        >
          Login
        </button>
      </form>
    </main>
  );
}

export default Login;
