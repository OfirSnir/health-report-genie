
import React from "react";
import FadeIn from "./animations/FadeIn";

interface PersonalInfoItem {
  label: string;
  value: string;
}

interface PersonalInfoProps {
  items: PersonalInfoItem[];
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ items }) => {
  return (
    <FadeIn delay={0.1} direction="up">
      <div className="report-section">
        <h2 className="report-heading">Personal information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
          {items.map((item, index) => (
            <div key={index} className="py-2 border-b border-gray-50 last:border-0">
              <div className="flex justify-between items-center">
                <span className="info-label">{item.label}</span>
                <span className="info-value">{item.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  );
};

export default PersonalInfo;
