import React, { useState } from 'react';
import { useUser } from '../UserContext/UserContext';

const Settings = () => {
  const { darkMode, setIsDarkMode } = useUser();
  const [profile, setProfile] = useState({
    username: '',
    email: '',
  });
  const [notifications, setNotifications] = useState(true);

  const handleThemeToggle = () => {
    setIsDarkMode(!darkMode);
  };

  const handleProfileChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleNotificationsChange = (e) => {
    setNotifications(e.target.checked);
  };

  const handleSaveProfile = () => {
    // Save profile settings logic
    console.log('Profile saved:', profile);
  };

  return (
    <div className={`w-full min-h-screen p-8 ${darkMode ? "bg-black text-white" : "bg-white text-gray-900"}`}>
      <div className={`"container mx-auto max-w-4xl shadow-lg rounded-lg p-8 ${darkMode ? "bg-black text-white" : "bg-white text-gray-900"}`}>
        <h2 className="text-3xl font-bold mb-6 border-b-2 pb-3 border-gray-200">Settings</h2>

        {/* Theme Toggle */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Theme</h3>
          <button
            onClick={handleThemeToggle}
            className={`px-6 py-3 rounded-lg text-white ${darkMode ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-800 hover:bg-gray-700"}`}
          >
            {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          </button>
        </div>

        {/* User Profile */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Profile</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Username</label>
              <input
                type="text"
                name="username"
                value={profile.username}
                onChange={handleProfileChange}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleProfileChange}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              onClick={handleSaveProfile}
              className="px-6 py-3 rounded-lg bg-green-500 text-white hover:bg-green-600"
            >
              Save Profile
            </button>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Notifications</h3>
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={notifications}
              onChange={handleNotificationsChange}
              className="form-checkbox h-5 w-5 text-blue-500"
            />
            <span className="text-lg">Enable Notifications</span>
          </label>
        </div>

        {/* Account Settings */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Account Settings</h3>
          <p className="text-lg text-gray-700">Manage your account settings here.</p>
          {/* Add form fields for changing password or email if needed */}
        </div>
      </div>
    </div>
  );
};

export default Settings;
