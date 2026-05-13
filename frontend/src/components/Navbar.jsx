import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.js';

export default function Navbar() {
  const { isAuthenticated, signOut } = useAuth();

  const linkClass = ({ isActive }) =>
    `px-3 py-2 text-sm font-medium rounded-md ${
      isActive ? 'bg-indigo-100 text-indigo-700' : 'text-slate-700 hover:bg-slate-100'
    }`;

  return (
    <header className="border-b border-slate-200 bg-white">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link to="/" className="text-lg font-semibold text-indigo-600">
          AI Task Manager
        </Link>
        <div className="flex items-center gap-2">
          {isAuthenticated ? (
            <>
              <NavLink to="/dashboard" className={linkClass}>Dashboard</NavLink>
              <NavLink to="/tasks" className={linkClass}>Tasks</NavLink>
              <button
                onClick={signOut}
                className="ml-2 rounded-md bg-slate-200 px-3 py-2 text-sm font-medium hover:bg-slate-300"
              >
                Sign out
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login" className={linkClass}>Login</NavLink>
              <NavLink to="/register" className={linkClass}>Register</NavLink>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
