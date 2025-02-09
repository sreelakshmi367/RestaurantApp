import React from "react";

interface ApiErrorProps {
  message: string;
  onRetry?: () => void;
}

const ApiError: React.FC<ApiErrorProps> = ({ message, onRetry }) => {
  return (
    <div className="flex flex-col items-center justify-center text-red-600 rounded-md p-4 max-w-md mx-auto">
      <p className="text-lg font-semibold">⚠️ Error: {message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-3 px-4 py-2 bg-red-500 text-white font-bold rounded-md hover:bg-red-600 transition"
        >
          Retry
        </button>
      )}
    </div>
  );
};

export default ApiError;
