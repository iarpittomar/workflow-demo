import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <>
      <section className="bg-gradient-to-b from-blue-700 via-blue-900 to-blue-800 min-h-[100vh] flex-1 flex justify-center items-center flex-col overflow-auto overflow-x-hidden px-80 py-24">
        <div className="bg-white-900 flex-1 w-full rounded-lg">{children}</div>
      </section>
    </>
  );
};

export default AuthLayout;
