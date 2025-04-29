import React from 'react';

const Modal = ({ title, isOpen, onClose, onSave, children }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        </div>
        
        <div className="px-6 py-4">
          {children}
        </div>
        
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-end">
          <button
            onClick={onClose}
            className="bg-white text-gray-700 font-medium py-2 px-4 border border-gray-300 rounded-md shadow-sm mr-2 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={onSave}
            className="bg-green-600 text-white font-medium py-2 px-4 border border-transparent rounded-md shadow-sm hover:bg-green-700"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;