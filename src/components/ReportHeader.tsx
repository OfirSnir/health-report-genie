
import React from "react";
import { Separator } from "@/components/ui/separator";
import FadeIn from "./animations/FadeIn";

interface ReportHeaderProps {
  patientName: string;
  reportType: string;
  date: string;
  clinician: string;
  timeFrame: string;
}

const ReportHeader: React.FC<ReportHeaderProps> = ({
  patientName,
  reportType,
  date,
  clinician,
  timeFrame,
}) => {
  return (
    <FadeIn>
      <div className="mb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold text-medical-dark">
              {patientName}{" "}
              <span className="text-medical-primary font-normal ml-1">{reportType}</span>
            </h1>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
          <div>
            <p className="text-gray-500 mb-1">Date</p>
            <p className="font-medium">{date}</p>
          </div>
          <div>
            <p className="text-gray-500 mb-1">Clinician</p>
            <p className="font-medium">{clinician}</p>
          </div>
          <div>
            <p className="text-gray-500 mb-1">Time frame</p>
            <p className="font-medium">{timeFrame}</p>
          </div>
        </div>
        <Separator className="mt-6 bg-gray-100" />
      </div>
    </FadeIn>
  );
};

export default ReportHeader;
