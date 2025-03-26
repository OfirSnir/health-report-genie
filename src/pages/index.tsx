
import React from "react";
import ReportContainer from "@/components/ReportContainer";
import ReportHeader from "@/components/ReportHeader";
import PersonalInfo from "@/components/PersonalInfo";
import GoalsList from "@/components/GoalsList";
import PHQChart from "@/components/PHQChart";
import PHQScorecard from "@/components/PHQScorecard";
import Head from "next/head";

export default function Home() {
  // Mock data for the personal information section
  const personalInfoData = [
    { label: "Insurance company", value: "Blue Cross Blue Shield" },
    { label: "Date of birth", value: "April 15, 1985" },
    { label: "Medical record number", value: "MRN-20221104-789" },
    { label: "Email", value: "danielle.ginzburg@example.com" },
    { label: "Insurance company", value: "United Healthcare" },
    { label: "Date of birth", value: "April 15, 1985" },
    { label: "A very long form name field", value: "This field contains a lengthy piece of text that demonstrates how the layout handles longer content" },
    { label: "Email", value: "d.ginzburg@example.com" },
    { label: "Phone", value: "(555) 123-4567" },
    { label: "Phone", value: "(555) 987-6543" },
  ];

  // Mock data for goals
  const goalsData = [
    { 
      id: 1, 
      text: "This is a mock copy of a patient goal, written by the behavioral health manager." 
    },
    { 
      id: 2, 
      text: "This is a mock copy of a patient goal." 
    },
    { 
      id: 3, 
      text: "This is a mock copy of a patient goal, written by the behavioral health manager." 
    },
  ];

  // Mock data for PHQ chart
  const phqChartData = [
    { month: "MAY", score: 15, level: "High" },
    { month: "JUN", score: 17, level: "High" },
    { month: "JUL", score: 15, level: "High" },
    { month: "AUG", score: 12, level: "Moderate" },
    { month: "SEP", score: 11, level: "Moderate" },
    { month: "OCT", score: 9, level: "Moderate" },
  ];

  // Mock data for PHQ scorecard
  const phqQuestions = [
    {
      id: 1,
      text: "Little interest or pleasure in doing things",
      score: 2,
    },
    {
      id: 2,
      text: "Little interest or pleasure in doing things",
      score: 1,
    },
    {
      id: 3,
      text: "Little interest or pleasure in doing things",
      score: 3,
    },
    {
      id: 4,
      text: "Moving or speaking so slowly that other people could have noticed? Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual",
      score: 2,
    },
  ];

  const phqScorecard2 = {
    date: "July 11, 2024",
    totalScore: 11,
    scoreOutOf: 27,
    severity: "Mild",
    questions: [
      {
        id: 1,
        text: "Little interest or pleasure in doing things",
        score: 1,
      },
      {
        id: 2,
        text: "Little interest or pleasure in doing things",
        score: 1,
      },
      {
        id: 3,
        text: "Little interest or pleasure in doing things",
        score: 1,
      },
      {
        id: 4,
        text: "Moving or speaking so slowly that other people could have noticed? Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual",
        score: 2,
      },
    ]
  };

  const phqScorecard3 = {
    date: "May 11, 2024",
    totalScore: 11,
    scoreOutOf: 27,
    severity: "Moderate",
    questions: [
      {
        id: 1,
        text: "Little interest or pleasure in doing things",
        score: 2,
      },
      {
        id: 2,
        text: "Little interest or pleasure in doing things",
        score: 1,
      },
      {
        id: 3,
        text: "Little interest or pleasure in doing things",
        score: 3,
      },
      {
        id: 4,
        text: "Moving or speaking so slowly that other people could have noticed? Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual",
        score: 2,
      },
    ]
  };

  return (
    <>
      <Head>
        <title>Health Report</title>
        <meta name="description" content="Health Report Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ReportContainer>
        <ReportHeader
          patientName="Danielle Ginzburg"
          reportType="Clinical report"
          date="January 20, 2025, 8:41 AM"
          clinician="Dr. Sophia Chen"
          timeFrame="February 25, 2025 to March 25, 2025"
        />
        <PersonalInfo items={personalInfoData} />
        <GoalsList goals={goalsData} />
        <PHQChart data={phqChartData} title="PHQ - 9" />
        <PHQScorecard
          date="September 11, 2024"
          totalScore={11}
          scoreOutOf={27}
          severity="Moderate"
          questions={phqQuestions}
        />
        <PHQScorecard
          date={phqScorecard2.date}
          totalScore={phqScorecard2.totalScore}
          scoreOutOf={phqScorecard2.scoreOutOf}
          severity={phqScorecard2.severity}
          questions={phqScorecard2.questions}
        />
        <PHQScorecard
          date={phqScorecard3.date}
          totalScore={phqScorecard3.totalScore}
          scoreOutOf={phqScorecard3.scoreOutOf}
          severity={phqScorecard3.severity}
          questions={phqScorecard3.questions}
        />
      </ReportContainer>
    </>
  );
}
