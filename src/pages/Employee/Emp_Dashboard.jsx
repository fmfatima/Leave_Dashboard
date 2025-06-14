import MyButton from "../../components/MyButton";

const Emp_Dashboard = () => {
  return (
    <div className="w-full max-w-[1020px] flex flex-col md:flex-row justify-between items-start md:items-center p-4 md:p-6 border border-gray-300 rounded-lg m-4 space-y-4 md:space-y-0">
      
      <div className="flex flex-col text-[#575757]">
        <h1 className="text-xl md:text-2xl font-bold">Welcome to Leave Work</h1>
        <p className="text-sm">We have assembled some links to get you started!</p>
      </div>

      <div className="flex md:gap-4  self-end md:self-auto">
        <MyButton 
          variant="outlined" 
          onClick={() => {}} // Replace '#' with actual handler
          className="!normal-case !w-[140px] !h-[34px] !text-[11px] !text-[#0FAC81] !border !border-[#0FAC81] !bg-transparent"
        >
          Leave Settings
        </MyButton>
      </div>

    </div>
  );
};

export default Emp_Dashboard;
