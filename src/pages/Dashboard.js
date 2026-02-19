import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
        <p className="text-gray-400">Welcome back 👋 Here’s your overview.</p>
      </div>

      {/* Stats Section */}
      <div className="grid md:grid-cols-3 gap-6">

        {/* Card 1 */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-all duration-300">
          <h2 className="text-xl font-semibold mb-2">Total Users</h2>
          <p className="text-3xl font-bold text-blue-400">1,204</p>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-all duration-300">
          <h2 className="text-xl font-semibold mb-2">Active Sessions</h2>
          <p className="text-3xl font-bold text-green-400">312</p>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-all duration-300">
          <h2 className="text-xl font-semibold mb-2">Revenue</h2>
          <p className="text-3xl font-bold text-purple-400">$8,450</p>
        </div>

      </div>

      {/* Extra Section */}
      <div className="mt-12 bg-gray-800 p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Recent Activity</h2>
        <ul className="space-y-2 text-gray-300">
          <li>• User Shivani signed up</li>
          <li>• New course added</li>
          <li>• Server updated successfully</li>
        </ul>
      </div>

    </div>
  );
};

export default Dashboard;
