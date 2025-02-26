
import { BarChart, Users, DollarSign, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocation } from "react-router-dom";

const menuItems = [
  { icon: BarChart, label: "Operaciones", path: "/" },
  { icon: Users, label: "RRHH", path: "/rrhh" },
  { icon: DollarSign, label: "Contabilidad", path: "/contabilidad" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

const MobileMenu = () => {
  const location = useLocation();

  return (
    <div className="fixed bottom-0 left-0 right-0 glass-dark border-t border-slate-800 md:hidden z-50">
      <div className="flex justify-around items-center p-3">
        {menuItems.map((item) => (
          <a
            key={item.label}
            href={item.path}
            className={cn(
              "flex flex-col items-center text-slate-400 hover:text-slate-100 transition-all duration-300",
              location.pathname === item.path && "text-slate-100 scale-110"
            )}
          >
            <item.icon className="w-6 h-6" />
            <span className="text-xs mt-1">{item.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;

