import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import Notification from "../Components/Notification";
import CreateModal from "../Components/CreateModal";
import Button from "../Components/Button";

export default function Task() {
  const arr = [
    {
      heading: "Submit my resume",
      time: " Today, 17:00",
    },
    {
      heading: "Complete the test",
      time: " Tommorrow, 10.00",
    },
  ];

  const arr1 = [
    {
      checkedHeading: "Respond to Jane email",
    },
    {
      checkedHeading: "Rechedule weekly meeting",
    },
  ];

  const [items, setItems] = useState(arr);
  const [items1, setItems1] = useState(arr1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    let obj = {
      heading: e.target["heading"].value,
      time: e.target["time"].value,
    };

    setItems((prevItems) => [...prevItems, obj]);
    setIsModalOpen(false);
  };
  

  return (
    <>
      <div>
        <Sidebar />
      </div>
      <div className="absolute top-[3rem] left-[19.06rem] leading-[1.13rem] ">
        <Button className="font-bold" onClick={() => setIsModalOpen(true)}>
          + Add new task
        </Button>
        <p className="mt-[2rem] font-bold ">Incomplete</p>
        <div className="border border-none mt-4">
          <table className="table-auto">
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <td className="border border-none pb-4 font-medium text-dimgray ml-2">
                    <input
                      id="checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-black border-gray-300 rounded mx-2"
                    ></input>
                    {item.heading}
                    <p className="text-gray-400 text-xs ml-8">{`⏰ ${item.time}`}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="absolute top-[25rem] left-[19.06rem] leading-[1.13rem] ">
        <p className="mt-[2rem] font-bold ">Completed</p>
        <div className="border border-none mt-4">
          <table className="table-auto">
            <tbody>
              {items1.map((item1, index) => (
                <tr key={index}>
                  <td className="border border-none pb-4 font-medium text-dimgray ml-2">
                    <input
                      checked
                      id="checked-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-black border-gray-300 rounded mx-2"
                    ></input>
                    {item1.checkedHeading}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <CreateModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        handleClick={handleClick}
      />

      <Notification />
    </>
  );
}
