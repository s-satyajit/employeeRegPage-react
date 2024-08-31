import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-500 text-white py-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">Employee Management System</h1>
        </div>
      </header>
      <main className="flex-grow container mx-auto py-8">
        <Outlet />
      </main>
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Employee Management System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
