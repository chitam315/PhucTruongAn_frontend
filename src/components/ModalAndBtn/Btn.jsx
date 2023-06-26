import React from 'react'

export const Btn = ({modalID,children,...props}) => {
  return (
    <button
        data-modal-target={modalID}
        data-modal-toggle={modalID}
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        {...props}
      >
        {children}
      </button>
  )
}
