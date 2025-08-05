import { Card } from "flowbite-react";

export function UserCard({ username, avatar, bio }) {
  return (
    <Card className="max-w-sm hover:shadow-lg transition-shadow duration-300">
      <div className="flex flex-col items-center pb-6">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg object-cover"
          src={avatar || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"}
          alt={`${username}'s profile`}
        />
        <h5 className="mb-2 text-xl font-medium text-gray-900 dark:text-white">
          {username}
        </h5>
        <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-4 px-3">
          {bio}
        </p>
        <div className="flex space-x-3">
          <button
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Follow
          </button>
          <button
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
          >
            Message
          </button>
        </div>
      </div>
    </Card>
  );
}

// Example usage:
// <UserCard 
//   username="Dr. Sarah Johnson"
//   avatar="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
//   bio="Mathematics Professor at Royal University. Passionate about making complex mathematical concepts accessible to all students."
// />
