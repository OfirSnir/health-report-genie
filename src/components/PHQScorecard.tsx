
import React from "react";
import { CheckIcon } from "lucide-react";
import FadeIn from "./animations/FadeIn";

interface PHQQuestion {
  id: number;
  text: string;
  score: number;
}

interface PHQScorecardProps {
  date: string;
  totalScore: number;
  scoreOutOf: number;
  severity: string;
  questions: PHQQuestion[];
}

const PHQScorecard: React.FC<PHQScorecardProps> = ({
  date,
  totalScore,
  scoreOutOf,
  severity,
  questions,
}) => {
  const getSeverityClass = (severity: string) => {
    switch (severity.toLowerCase()) {
      case "mild":
        return "phq-score-mild";
      case "moderate":
        return "phq-score-moderate";
      case "severe":
        return "phq-score-severe";
      default:
        return "phq-score-mild";
    }
  };

  return (
    <FadeIn delay={0.4} direction="up">
      <div className="report-section">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-medium text-medical-dark">
            PHQ - 9
            <span className="ml-3 text-sm font-normal text-gray-500">
              Score: {totalScore} of {scoreOutOf}
            </span>
          </h2>
          <div className="flex items-center gap-2">
            <span className={`phq-score ${getSeverityClass(severity)}`}>{severity}</span>
            <span className="text-sm text-gray-500">Date: {date}</span>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider py-3 w-1/2">
                  Over the last 2 weeks, how often have you been bothered by any of the following problems?
                </th>
                <th className="text-center text-xs font-medium text-gray-500 uppercase tracking-wider py-3 w-1/8">
                  0
                  <div className="text-[10px] font-normal normal-case">Not at all</div>
                </th>
                <th className="text-center text-xs font-medium text-gray-500 uppercase tracking-wider py-3 w-1/8">
                  1
                  <div className="text-[10px] font-normal normal-case">Several days</div>
                </th>
                <th className="text-center text-xs font-medium text-gray-500 uppercase tracking-wider py-3 w-1/8">
                  2
                  <div className="text-[10px] font-normal normal-case">Over half of the days</div>
                </th>
                <th className="text-center text-xs font-medium text-gray-500 uppercase tracking-wider py-3 w-1/8">
                  3
                  <div className="text-[10px] font-normal normal-case">Nearly every day</div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {questions.map((question) => (
                <tr key={question.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="py-4 text-sm text-gray-700">{question.text}</td>
                  <td className="py-4 text-center">
                    {question.score === 0 && (
                      <div className="flex justify-center">
                        <CheckIcon className="h-5 w-5 text-medical-primary" />
                      </div>
                    )}
                  </td>
                  <td className="py-4 text-center">
                    {question.score === 1 && (
                      <div className="flex justify-center">
                        <CheckIcon className="h-5 w-5 text-medical-primary" />
                      </div>
                    )}
                  </td>
                  <td className="py-4 text-center">
                    {question.score === 2 && (
                      <div className="flex justify-center">
                        <CheckIcon className="h-5 w-5 text-medical-primary" />
                      </div>
                    )}
                  </td>
                  <td className="py-4 text-center">
                    {question.score === 3 && (
                      <div className="flex justify-center">
                        <CheckIcon className="h-5 w-5 text-medical-primary" />
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </FadeIn>
  );
};

export default PHQScorecard;
