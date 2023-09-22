import SideBar from "@/componnent/shared/SideBar";

export const metadata = {
  title: "Create Next js DashBoard",
  description: "Generated by create next app",
};

const DashBoardLayout = ({ children }) => {
  return (
    <div className="flex ">
      <SideBar />
      <div className="w-full">{children}</div>
    </div>
  );
};

export default DashBoardLayout;
