
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Home, Users, Settings, FileText, HelpCircle } from 'lucide-react';

const Sidebar: FC = () => {
  return (
    <div className="h-full w-64 bg-gradient-to-b from-slate-800 to-slate-900 text-white p-4 hidden md:block">
      <div className="flex items-center gap-3 mb-8">
        <div className="h-8 w-8 rounded-full bg-amber-500 flex items-center justify-center text-slate-900 font-bold">
          M
        </div>
        <h2 className="text-xl font-semibold">Mining Ops</h2>
      </div>
      
      <nav>
        <ul className="space-y-2">
          <li>
            <Link to="/" className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-slate-700 transition-colors">
              <Home className="h-5 w-5 text-amber-500" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/calendar" className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-slate-700 transition-colors">
              <Calendar className="h-5 w-5 text-amber-500" />
              <span>Calendar</span>
            </Link>
          </li>
          <li>
            <Link to="/reports" className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-slate-700 transition-colors">
              <FileText className="h-5 w-5 text-amber-500" />
              <span>Reports</span>
            </Link>
          </li>
          <li>
            <Link to="/team" className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-slate-700 transition-colors">
              <Users className="h-5 w-5 text-amber-500" />
              <span>Team</span>
            </Link>
          </li>
          <li>
            <Link to="/help" className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-slate-700 transition-colors">
              <HelpCircle className="h-5 w-5 text-amber-500" />
              <span>Help</span>
            </Link>
          </li>
          <li>
            <Link to="/settings" className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-slate-700 transition-colors">
              <Settings className="h-5 w-5 text-amber-500" />
              <span>Settings</span>
            </Link>
          </li>
        </ul>
      </nav>
      
      <div className="absolute bottom-4 left-4 right-4">
        <Link 
          to="/auth" 
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-700 text-white px-4 py-2 rounded hover:from-amber-600 hover:to-amber-800 transition-colors"
        >
          Sign In/Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
