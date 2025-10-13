import React from "react";

function Text({ children }) {
  return (
    <p className="text-base font-normal text-gray-400 dark:text-gray-300 leading-6 mb-4">
      {children}
    </p>
  );
}

export default Text;
