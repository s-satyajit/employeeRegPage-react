import React from 'react';

const UserDetailsPage = ({ user }) => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">User Details</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <p className="w-full px-4 py-2 border rounded-lg">{user.name}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <p className="w-full px-4 py-2 border rounded-lg">{user.email}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Phone No</label>
          <p className="w-full px-4 py-2 border rounded-lg">{user.phone}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Adhaar Card</label>
          <p className="w-full px-4 py-2 border rounded-lg">{user.adhaar}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Education</label>
          <p className="w-full px-4 py-2 border rounded-lg">{user.education}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Experience</label>
          <p className="w-full px-4 py-2 border rounded-lg">{user.experience}</p>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsPage;