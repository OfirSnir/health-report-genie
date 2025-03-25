
import React, { ReactNode } from "react";

interface ReportContainerProps {
  children: ReactNode;
}

const ReportContainer: React.FC<ReportContainerProps> = ({ children }) => {
  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      <div className="max-w-5xl mx-auto p-4 md:p-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ReportContainer;
