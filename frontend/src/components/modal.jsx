
import React, { useState } from "react";

const AdderpathModal =()=>{

  const [isOpen, setIsOpen] = useState(false);
  const [folders, setFolders] = useState(["C:\\Users\\Music","C:\\Users\\Telegram"]);

  const toggleModal = () => setIsOpen(!isOpen);

  document.addEventListener('openmodalAdd',()=>{
    setIsOpen(!isOpen);
  })

  const addFolder = () => {
    console.log('add')
  };

  const removeFolder = (index) => {
    console.log('remove')
  };

  return (
    <>
      {/* Bouton pour ouvrir la modal */}
     
      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
          <div className="bg-white w-full max-w-lg p-6  border shadow-lg blur-none " >
            {/* Header */}
            <div className="flex justify-between items-center border-b pb-3 ">
              <h2 className="text-lg font-semibold text-gray-700">Gérer les emplacements</h2>
              <button
                className="text-gray-400 hover:text-gray-600"
                onClick={toggleModal}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Contenu */}
            <div className="mt-4">
              <p className="text-sm text-gray-500 mb-4">
                Ajoutez ou supprimez les dossiers contenant vos morceaux pour les rechercher facilement.
              </p>
              <ul className="space-y-3">

                
                {folders.map((folder, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center px-4 py-2 bg-gray-200 hover:bg-gray-300 hover:border-lg"
                  >
                    <span className="text-sm ">{folder}</span>
                    <button
                className="text-gray-400 hover:text-gray-600"
                onClick={() => removeFolder(index)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
                   
                  </li>
                ))}
              </ul>
            </div>

            {/* Boutons d'action */}
            <div className="mt-6 flex justify-between">
              {/* <button
                className="px-4 py-2 bg-gray-200 text-gray-700  hover:bg-gray-300 focus:outline-none"
                onClick={toggleModal}
              >
                Annuler
              </button> */}
              <button
                className="px-4 py-2 border bg-gray-200 hover:bg-gray-300 hover:border-lg focus:outline-none"
                onClick={addFolder}
              >
                Ajouter un dossier
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};


export default AdderpathModal;




