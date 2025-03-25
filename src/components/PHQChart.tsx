
import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts";
import FadeIn from "./animations/FadeIn";

interface DataPoint {
  month: string;
  score: number;
  level: string;
}

interface PHQChartProps {
  data: DataPoint[];
  title: string;
}

const PHQChart: React.FC<PHQChartProps> = ({ data, title }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const getScoreColor = (level: string) => {
    switch (level.toLowerCase()) {
      case "high":
        return "#EF4444";
      case "moderate":
        return "#F59E0B";
      case "mild":
        return "#3B82F6";
      default:
        return "#10B981";
    }
  };

  const CustomDot = (props: any) => {
    const { cx, cy, payload } = props;
    return (
      <circle
        cx={cx}
        cy={cy}
        r={6}
        stroke="white"
        strokeWidth={2}
        fill={getScoreColor(payload.level)}
        className="drop-shadow-sm"
      />
    );
  };

  return (
    <FadeIn delay={0.3} direction="up">
      <div className="report-section">
        <h2 className="report-heading">{title}</h2>
        {isClient && (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#6B7280" }}
                padding={{ left: 20, right: 20 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#6B7280" }}
                domain={[0, 20]}
                ticks={[0, 5, 10, 15, 20]}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "none",
                  borderRadius: "0.5rem",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                  fontSize: "0.875rem",
                  padding: "0.75rem",
                }}
                labelStyle={{ fontWeight: 600, marginBottom: "0.25rem" }}
              />
              <Line
                type="monotone"
                dataKey="score"
                stroke="#0E4C92"
                strokeWidth={2}
                activeDot={false}
                dot={<CustomDot />}
                connectNulls
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>
    </FadeIn>
  );
};

export default PHQChart;
