
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';
import LogoutConfirmDialog from './LogoutConfirmDialog';

interface AdminHeaderProps {
  activeTab: 'dashboard' | 'discover';
  onTabChange: (tab: 'dashboard' | 'discover') => void;
}

const AdminHeader: React.FC<AdminHeaderProps> = ({ activeTab, onTabChange }) => {
  const { logout, user } = useAuth();
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);

  const handleLogout = () => {
    logout();
    setShowLogoutDialog(false);
  };

  return (
    <>
      <header className="bg-black text-white p-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold">Blog Admin</h1>
            <nav className="flex space-x-4">
              <button
                onClick={() => onTabChange('dashboard')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === 'dashboard' 
                    ? 'bg-white text-black' 
                    : 'hover:bg-slate-800'
                }`}
              >
                Dashboard
              </button>
              <button
                onClick={() => onTabChange('discover')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === 'discover' 
                    ? 'bg-white text-black' 
                    : 'hover:bg-slate-800'
                }`}
              >
                Discover
              </button>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm">{user?.email}</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowLogoutDialog(true)}
              className="text-white hover:bg-slate-800"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <LogoutConfirmDialog
        isOpen={showLogoutDialog}
        onClose={() => setShowLogoutDialog(false)}
        onConfirm={handleLogout}
      />
    </>
  );
};

export default AdminHeader;
