import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

function Formregis() {
  const [form, setForm] = useState({ email: "", password: "", konfirmasi: "" });
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.email.includes("@")) {
      setError("Email tidak valid");
      return;
    }
    if (form.password.length < 6) {
      setError("Password minimal 6 karakter");
      return;
    }
    if (form.password !== form.konfirmasi) {
      setError("Konfirmasi password tidak cocok");
      return;
    }

    setError("");
  login(form.email);
  navigate("/keranjang");
  }

  return (
    <div className="max-w-sm mx-auto p-6">
      <h1 className="text-xl font-bold mb-4 text-center">Registrasi</h1>

      <form onSubmit={handleSubmit} className="border rounded-lg bg-white shadow p-4 space-y-3">
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="border rounded w-full px-3 py-2 text-sm"
        />

        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="border rounded w-full px-3 py-2 text-sm"
        />

        <input
          type="password"
          placeholder="Konfirmasi Password"
          value={form.konfirmasi}
          onChange={(e) => setForm({ ...form, konfirmasi: e.target.value })}
          className="border rounded w-full px-3 py-2 text-sm"
        />

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          className="w-full bg-slate-500 hover:bg-slate-600 text-white font-semibold py-2 rounded text-sm"
        >
          Daftar
        </button>

        <p className="text-center text-sm text-gray-600">
          Sudah punya akun?{" "}
          <Link to="/login" className="text-slate-600 font-semibold hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Formregis;