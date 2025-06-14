import MyTextField from '../../components/MyTextField';
import Dashboard from './Dashboard'
import SideBar from "./SideBar";


const Leaves_to_Approve = () => {
  return (
    <>
    <Box sx={{ display: 'flex' }}>
      <SideBar />

      <Dashboard />

      <div className="px-4 sm:px-6 lg:px-10 mt-5">
        <h1 className="text-[#8C8C8C] text-[14px] mb-3">Date Range</h1>
        <div className="max-w-[300px] w-full">
          <MyTextField
            type="email"
            id="email"
            placeholder="Enter your email"
            required
          />
        </div>
      </div>

      <div className="overflow-x-auto px-4 sm:px-6 lg:px-4 mt-5">
        <table className="min-w-[640px] w-full max-w-[1020px] border border-[#ECEEF0] rounded-lg ml-0 text-sm sm:text-base">
          <thead className="bg-[#F9FBFC] border-b-2 border-[#ECEEF0]">
            <tr className="text-[#575757] text-[16px] font-semibold">
              <th className="text-left px-4 py-2">No</th>
              <th className="text-left px-4 py-2">Name</th>
              <th className="text-left px-4 py-2">Duration</th>
              <th className="text-left px-4 py-2">Date</th>
              <th className="text-left px-4 py-2">Comment</th>
              <th className="text-left px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                id: "01",
                name: "Adil",
                duration: "2 Days",
                date: "12-02-2025",
                comment: "Tour",
              },
              {
                id: "02",
                name: "Meerab",
                duration: "2 Days",
                date: "12-02-2025",
                comment: "Sickness",
              },
            ].map((emp, idx) => (
              <tr key={idx} className="bg-white text-[#575757] text-[14px] h-[80px] border-b border-gray-200">
                <td className="text-left px-4 py-2">{emp.id}</td>
                <td className="text-left px-4 py-2">{emp.name}</td>
                <td className="text-left px-4 py-2">{emp.duration}</td>
                <td className="text-left px-4 py-2">{emp.date}</td>
                <td className="text-left px-4 py-2">{emp.comment}</td>
                <td className="text-left px-4 py-2">
                  <div className="flex items-center space-x-4">
                    <label className="flex items-center space-x-1 text-green-600">
                      <input type="checkbox" className="accent-green-600 w-4 h-4" />
                      <span>Accept</span>
                    </label>
                    <label className="flex items-center space-x-1 text-red-600">
                      <input type="checkbox" className="accent-red-600 w-4 h-4" />
                      <span>Reject</span>
                    </label>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Box>
    </>
  );
};

export default Leaves_to_Approve;
