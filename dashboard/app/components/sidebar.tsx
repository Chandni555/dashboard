import React from "react";
import { FaRegQuestionCircle, FaCog } from "react-icons/fa"; // For icons

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="px-6 py-4">
        <h1 className="text-xl font-bold text-red-600">TESLA</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4">
        <ul className="space-y-2">
          <li>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100"
            >
              <span className="text-sm font-medium">Reports</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100"
            >
              <span className="text-sm font-medium">Library</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100"
            >
              <span className="text-sm font-medium">People</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100"
            >
              <span className="text-sm font-medium">Activities</span>
            </a>
          </li>
        </ul>
      </nav>

      {/* Support Section */}
      <div className="mt-4 px-4">
        <ul className="space-y-2">
          <li>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100"
            >
              <FaRegQuestionCircle className="mr-3" />
              <span className="text-sm font-medium">Get Started</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100"
            >
              <FaCog className="mr-3" />
              <span className="text-sm font-medium">Settings</span>
            </a>
          </li>
        </ul>
      </div>

      {/* User Profile */}
      <div className="mt-auto px-4 py-6">
        <div className="flex items-center space-x-4">
          <img
            src="https://via.placeholder.com/40"
            alt="User Profile"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="text-sm font-medium">Sam Wheeler</h2>
            <p className="text-xs text-gray-500">samwheeler@example.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
