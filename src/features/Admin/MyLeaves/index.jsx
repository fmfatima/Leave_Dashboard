
const Leaves = () => {
  return (
    <>
      <div className="overflow-x-auto w-full">
      <table className="min-w-[640px] w-full border border-[#ECEEF0] rounded-lg text-sm sm:text-base">
          <thead className="bg-[#F9FBFC] border-b-2 border-[#ECEEF0]">
            <tr className="text-[#575757] text-[16px] font-semibold">
              <th className="text-left px-4 py-2">Sr.</th>
              <th className="text-left px-4 py-2">Leave Type</th>
              <th className="text-left px-4 py-2">Duration</th>
              <th className="text-left px-4 py-2">Status</th>
              <th className="text-left px-4 py-2">Date</th>
              <th className="text-left px-4 py-2">Comment</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                id: "01",
                type: "Sick Leave",
                duration: "2 Days",
                status: "Active",
                date: "06-04-2025",
                comment: "Sickness",
              },
              {
                id: "02",
                type: "Sick Leave",
                duration: "2 Days",
                status: "Active",
                date: "06-04-2025",
                comment: "Sickness",
              },
            ].map((leave, idx) => (
              <tr
                key={idx}
                className="bg-white text-[#575757] text-[14px] h-[80px] border-b border-gray-200"
              >
                <td className="text-left px-4 py-2">{leave.id}</td>
                <td className="text-left px-4 py-2">{leave.type}</td>
                <td className="text-left px-4 py-2">{leave.duration}</td>
                <td className="text-left px-4 py-2">
                  <span className="bg-[#0FAC8191] text-white px-2 py-1 rounded-2xl text-sm inline-block">
                    {leave.status}
                  </span>
                </td>
                <td className="text-left px-4 py-2">{leave.date}</td>
                <td className="text-left px-4 py-2">{leave.comment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </>
  );
};

export default Leaves;
