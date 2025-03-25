
import React from "react";
import FadeIn from "./animations/FadeIn";

interface Goal {
  id: number;
  text: string;
}

interface GoalsListProps {
  goals: Goal[];
}

const GoalsList: React.FC<GoalsListProps> = ({ goals }) => {
  return (
    <FadeIn delay={0.2} direction="up">
      <div className="report-section">
        <h2 className="report-heading">Goals</h2>
        <div className="space-y-3">
          {goals.map((goal) => (
            <div
              key={goal.id}
              className="p-4 rounded-md border border-gray-100 bg-gray-50/50 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-medical-primary/10 rounded-full flex items-center justify-center text-medical-primary text-sm font-medium">
                  {goal.id}
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{goal.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  );
};

export default GoalsList;
