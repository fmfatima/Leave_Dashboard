import Dashboard from "./Dashboard";
import SideBar from "./SideBar";


const EmployeeDetails = () => {
  return (
    <>
    <Box sx={{ display: 'flex' }}>
      <SideBar />

      <Dashboard />

      {/* Responsive Table Wrapper */}
      <div className="overflow-x-auto px-4 sm:px-6">
        <table className="min-w-[640px] w-full max-w-[1020px] border border-[#ECEEF0] rounded-lg mr-auto mt-5 text-sm sm:text-base">
          <thead className="bg-[#F9FBFC] border-b-2 border-[#ECEEF0]">
            <tr className="text-[#575757] text-[16px] font-semibold">
              <th className="text-left px-4 py-2">No</th>
              <th className="text-left px-4 py-2">Employee</th>
              <th className="text-left px-4 py-2">Status</th>
              <th className="text-left px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {[
              { id: "01", name: "Adil", status: "2 Days" },
              { id: "02", name: "Aqil", status: "2 Days" },
            ].map((emp, idx) => (
              <tr
                key={idx}
                className="bg-white text-[#575757] text-[14px] h-[80px] border-b border-gray-200"
              >
                <td className="text-left px-4 py-2">{emp.id}</td>
                <td className="text-left px-4 py-2">{emp.name}</td>
                <td className="text-left px-4 py-2">{emp.status}</td>
                <td className="text-left px-4 py-2">
                  <a
                    href="#"
                    className="text-[#0FAC81] underline text-[13px] sm:text-[14px]"
                  >
                    Click
                  </a>
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

export default EmployeeDetails;
