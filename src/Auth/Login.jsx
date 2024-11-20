import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../store/authStore';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email });
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-blue-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-2">Login to Account</h2>
        <p className="text-gray-600 text-center text-sm mb-6">
          Please enter your email and password to continue
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email address:
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded-md bg-gray-50"
              placeholder="Enter your email"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded-md bg-gray-50"
              required
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="mr-2"
              />
              <span className="text-sm text-gray-600">Remember Password</span>
            </label>
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Forget Password?
            </a>
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Sign In
          </button>
        </form>
        
        <div className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <a href="#" className="text-blue-500 hover:underline">
            Create Account
          </a>
        </div>
      </div>
    </div>
  );
}