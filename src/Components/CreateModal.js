import React from "react";
import Button from "../Components/Button";
import Input from "./Input";

function CreateModal({ isModalOpen, setIsModalOpen, handleClick }) {
  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 z-40 backdrop-blur-sm bg-opacity-50 bg-black"></div>
      )}
      <div
        id="authentication-modal"
        tabIndex="-1"
        aria-hidden="true"
        className={`fixed flex justify-center items-center z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full ${
          isModalOpen ? "" : "hidden"
        }`}
      >
        <div className="relative w-2/5  rounded-lg shadow bg-white">
          <div className="px-6 py-6 lg:px-8">
            <h3 className="mb-4 text-xl w-full font-medium text-gray-900 ">
              New Task
            </h3>
            <form className="space-y-6" onSubmit={handleClick}>
              <div>
                <Input
                  label="Heading"
                  type="text"
                  name="heading"
                  id="heading"
                  inputVariant="modal_input"
                />
              </div>
              <div>
                <Input
                  label="Description"
                  type="text"
                  name="description"
                  id="description"
                  inputVariant="modal_input"
                />
              </div>
              <div>
                <Input
                  label="Due Date"
                  type="text"
                  name="time"
                  id="time"
                  inputVariant="modal_input"
                />
              </div>
              <div className="flex flex-col space-y-2 justify-center items-center font-medium  text-center">
                <Button type="submit" style="secondary">
                  Save
                </Button>
                <Button
                  type="button"
                  style="simple"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateModal;
