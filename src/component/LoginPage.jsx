import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [userDetails, setUserDetails] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      setMessage('Login successful!');
      setUserDetails(storedUser);
    } else {
      setMessage('Invalid email or password');
    }
  };

  return (
    <div className="flex-grow flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 min-h-screen">
      <div className="max-w-md w-full bg-white bg-opacity-75 backdrop-blur-md p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">
            Login
          </button>
        </form>
        {message && <p className="mt-4 text-red-500">{message}</p>}
        {userDetails && (
          <div className="mt-4 p-4 bg-gray-100 rounded-lg">
            <h3 className="text-xl font-bold mb-2">User Details</h3>
            <p><strong>Name:</strong> {userDetails.name}</p>
            <p><strong>Email:</strong> {userDetails.email}</p>
            <p><strong>Adhaar:</strong> {userDetails.adhaar}</p>
            <p><strong>Education:</strong> {userDetails.education}</p>
            <p><strong>Experience:</strong> {userDetails.experience}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;