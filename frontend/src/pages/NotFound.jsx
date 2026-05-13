import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="py-20 text-center">
      <h1 className="text-4xl font-semibold text-slate-900">404</h1>
      <p className="mt-2 text-slate-600">Page not found.</p>
      <Link to="/dashboard" className="mt-4 inline-block text-indigo-600">Go home</Link>
    </div>
  );
}
