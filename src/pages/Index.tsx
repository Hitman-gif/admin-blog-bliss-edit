
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { AuthProvider } from '../contexts/AuthContext';
import { BlogProvider } from '../contexts/BlogContext';
import LoginForm from '../components/LoginForm';
import AdminHeader from '../components/AdminHeader';
import AdminDashboard from '../components/AdminDashboard';

const MainApp: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const [activeTab, setActiveTab] = useState<'dashboard' | 'discover'>('dashboard');

  if (!isAuthenticated) {
    return <LoginForm />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="py-8">
        {activeTab === 'dashboard' && <AdminDashboard />}
        {activeTab === 'discover' && <AdminDashboard />}
      </main>
    </div>
  );
};

const Index = () => {
  return (
    <AuthProvider>
      <BlogProvider>
        <MainApp />
      </BlogProvider>
    </AuthProvider>
  );
};

export default Index;
