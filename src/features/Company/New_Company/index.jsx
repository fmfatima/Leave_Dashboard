import Nav from "../../../components/ui/Nav";
import MyButton from "../../../components/MyButton";
import MyTextField from "../../../components/MyTextField";
import { useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';


const Create_Company = () => {
  const navigate = useNavigate();
     const [preview, setPreview] = useState(null);
    const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
        setPreview(URL.createObjectURL(file));
        }
    };

    const triggerFileSelect = () => {
        fileInputRef.current.click();
    };

  return (
    <>
      <Nav/>

      <div className="flex flex-col sm:flex-row gap-6 items-center justify-start mt-10 ml-2 sm:ml-0 absolute right-1/2 top-1/2 -translate-y-1/2">
        {/* Profile Card */}
        <div className="flex flex-col items-center bg-[#F6F6F6] rounded-xl shadow w-[200px] sm:w-[220px] md:w-[254px] h-auto p-3 sm:p-4">
          <img
            src="src/assets/profile1.png"
            alt="Profile"
            onClick={() => navigate('/')}
            className="cursor-pointer w-[110px] h-[110px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px] rounded-lg"
          />
          <div className="flex items-start mt-3">
            <span className="text-base sm:text-lg font-semibold">Profile</span>
          </div>
        </div>
  
        {/* Company Card */}
        <div className="flex flex-col items-center bg-[#F6F6F6] rounded-xl shadow w-[200px] sm:w-[220px] md:w-[254px] h-auto p-3 sm:p-4">
          <img
            src="src/assets/company.png"
            alt="Company"
            onClick={() => navigate('/createCompany')}
            className="cursor-pointer w-[110px] h-[110px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px] rounded-lg"
          />
          <div className="flex items-center mt-3">
            <span className="text-base sm:text-lg font-semibold">Company</span>
            <button
              onClick={() => navigate('/createCompany')}
              className="ml-2 p-1 bg-green-500 text-white rounded-full hover:bg-green-600"
            >
              <FaPlus size={16} />
            </button>
          </div>
        </div>
      </div>

        {/* form  */}
      <div className="flex flex-col p-6 sm:p-10 w-full max-w-[1114px] rounded-xl shadow bg-[#F9FBFC] mx-auto mt-30 mb-20">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-6 w-full">
          <div className="flex flex-col w-full max-w-[368px]">
            <label className="text-black text-[14px] mb-2">Leave Type</label>
            <MyTextField
              type="text"
              id="leave-type"
              placeholder="Enter leave type"
              required
              value=""
            />
          </div>

          <div className="flex flex-col w-full max-w-[368px]">
            <label className="text-black text-[14px] mb-2">No of Leaves</label>
            <MyTextField
              type="number"
              id="leave-count"
              placeholder="Enter number of leaves"
              required
              value=""
            />
          </div>
        </div>

        {/* File upload (responsive width) */}
        <div
          className="w-full max-w-[615px] h-[195px] flex justify-center items-center border-2 border-dotted border-[#575757] rounded-xl cursor-pointer mb-6"
          onClick={triggerFileSelect}
        >
          {preview ? (
            <img
              src={preview}
              alt="Uploaded"
              className="w-full h-full object-cover rounded-xl"
            />
          ) : (
            <img src="src/assets/upload.png" alt="Upload Icon" />
          )}
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />
        </div>

        <MyButton className="!normal-case !w-[219px] !h-[37px] !text-[11px] text-white !bg-[#0FAC81] rounded">
          Upload
        </MyButton>

      </div>

    </>
  )
}

export default Create_Company
