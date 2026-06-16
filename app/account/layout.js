import SideNavigation from "@/starter/SideNavigation";

// nested layout
export default function layout({ children }) {
  return (
    <div className="grid grid-cols-[16rem_1fr] h-full gap-12">
      <SideNavigation />
      <div className="p-1">{children}</div>
    </div>
  );
}
