import { useState } from "react";
import Dashboard from "../Admin/Dashboard";
import MyButton from "../../components/MyButton";
import MyTextField from "../../components/MyTextField";
import { RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlineEdit } from "react-icons/ai";

const Leave_Settings = () => {
  const [leaveType, setLeaveType] = useState("");
  const [noOfLeaves, setNoOfLeaves] = useState("");
  const [leaves, setLeaves] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleSave = () => {
    if (!leaveType || !noOfLeaves) return;

    const newLeave = {
      type: leaveType,
      no: noOfLeaves,
    };

    if (isEditing) {
      const updated = [...leaves];
      updated[editIndex] = newLeave;
      setLeaves(updated);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setLeaves([...leaves, newLeave]);
    }

    setLeaveType("");
    setNoOfLeaves("");
  };

  const handleDelete = (index) => {
    const filtered = leaves.filter((_, idx) => idx !== index);
    setLeaves(filtered);
  };

  const handleEdit = (index) => {
    const selected = leaves[index];
    setLeaveType(selected.type);
    setNoOfLeaves(selected.no);
    setIsEditing(true);
    setEditIndex(index);
  };

  return (
    <>
      <Dashboard />

      {/* Form */}
      <div className="w-full max-w-[1020px] flex justify-center items-center p-4 sm:p-6 border border-gray-300 rounded-lg m-4">
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="text-xl sm:text-2xl font-semibold text-[#0FAC81] mb-6">
            Select Leave Range
          </h1>

          <div className="flex flex-col sm:flex-row gap-6 mb-6">
            <div className="flex flex-col w-[368px]">
              <label className="text-black text-[14px] mb-2">Leave Type</label>
              <MyTextField
                type="text"
                id="leave-type"
                placeholder="Enter leave type"
                required
                value={leaveType}
                onChange={(e) => setLeaveType(e.target.value)}
              />
            </div>

            <div className="flex flex-col w-[368px]">
              <label className="text-black text-[14px] mb-2">No of Leaves</label>
              <MyTextField
                type="number"
                id="leave-count"
                placeholder="Enter number of leaves"
                required
                value={noOfLeaves}
                onChange={(e) => setNoOfLeaves(e.target.value)}
              />
            </div>
          </div>

          <MyButton
            onClick={handleSave}
            className="!normal-case !w-[219px] !h-[37px] !text-[11px] text-white !bg-[#0FAC81] rounded"
          >
            {isEditing ? "Update" : "Save"}
          </MyButton>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto px-4 sm:px-6 lg:px-4 mt-5">
        <table className="min-w-[640px] w-full max-w-[1020px] border border-[#ECEEF0] rounded-lg text-sm sm:text-base">
          <thead className="bg-[#F9FBFC] border-b-2 border-[#ECEEF0]">
            <tr className="text-[#575757] text-[16px] font-semibold">
              <th className="text-left px-4 py-2">Types Of Leave</th>
              <th className="text-left px-4 py-2">No of Leaves</th>
              <th className="text-left px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {leaves.map((emp, idx) => (
              <tr
                key={idx}
                className="bg-white text-[#575757] text-[14px] h-[80px] border-b border-gray-200"
              >
                <td className="text-left px-4 py-2">{emp.type}</td>
                <td className="text-left px-4 py-2">{emp.no}</td>
                <td className="text-left px-4 py-2">
                  <div className="flex items-center space-x-4">
                    <button
                      className="text-red-600 hover:text-red-800"
                      onClick={() => handleDelete(idx)}
                    >
                      <RiDeleteBin5Line size={18} />
                    </button>
                    <button
                      className="text-blue-600 hover:text-blue-800"
                      onClick={() => handleEdit(idx)}
                    >
                      <AiOutlineEdit size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {leaves.length === 0 && (
              <tr>
                <td colSpan="3" className="text-center text-gray-400 py-6">
                  No leave records added yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Leave_Settings;
