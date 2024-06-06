"use client";
import { useEffect, useState } from "react";
import "./page.scss";

import { MdOutlineDateRange } from "react-icons/md";
import { FaMicrophone } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import LiveCall from "@/app/calls/LiveCall/LiveCall";

interface RowDataType {
  date: string;
  number: string;
  score: number;
  group: string | null;
  transcript: string | null;
}

const rowData: RowDataType[] = [
  {
    date: "now",
    number: "+8888-8888-88888",
    score: 5,
    group: null,
    transcript: "In progress ...",
  },
  {
    date: "06/06/2024 1:14 pm",
    number: "+4444-4444-44444",
    score: 9,
    group: "Trusted",
    transcript: null,
  },
  {
    date: "06/06/2024 1:15 pm",
    number: "+5555-5555-55555",
    score: 8,
    group: "Trusted",
    transcript: null,
  },
  {
    date: "06/06/2024 1:16 pm",
    number: "+6666-6666-66666",
    score: 7,
    group: "White list",
    transcript: "Test 2:-Hi my name is Andy. -Hi, Andy.",
  },
  {
    date: "06/06/2024 1:17 pm",
    number: "+7777-7777-77777",
    score: 6,
    group: "White list",
    transcript: "Test 3: -Hi my name is Andy. -Hi, Andy. ",
  },
];

export default function Page() {
  return (
    <div className="calls-page">
      <h1>TellmePIN</h1>
      <LiveCall />
      <div className="calls-table">
        <div className="table-header">
          <div>
            <MdOutlineDateRange />
            Date
          </div>
          <div>Number</div>
          <div>
            <FaUserCheck />
            Score
          </div>
          <div>Group</div>
          <div>
            <FaMicrophone />
            Record
          </div>
        </div>
        {rowData.map((row, index) => (
          <TableRow key={index} rowData={row} />
        ))}
      </div>
    </div>
  );
}

const TableRow = ({ rowData }: { rowData: RowDataType }) => {
  const { date, number, score, group, transcript } = rowData;
  const [showTranscript, setShowTranscript] = useState(false);
  const [clickedText, setClickedText] = useState<string | null>(null);

  const handleShowClick = () => {
    setShowTranscript(!showTranscript);
  };

  const handleClick = (text: string) => {
    setClickedText(text);
  };

  return (
    <div className="table-row">
      <div>{date}</div>
      <div>{number}</div>
      <div className={`cell-score ${score > 5 ? "green" : "red"}`}>{score}</div>
      <div className="btn-wrapper">
        {group ? (
          <div>{group}</div>
        ) : clickedText ? (
          <div>{clickedText}</div>
        ) : (
          <>
            <div className="table_btv" onClick={() => handleClick("Trusted")}>
              Trusted
            </div>
            <div
              className="table_btv"
              onClick={() => handleClick("White list")}
            >
              White list
            </div>
          </>
        )}
      </div>
      {!transcript ? (
        <div className="record-text">none</div>
      ) : (
        <>
          <div className="show-btn" onClick={handleShowClick}>
            {showTranscript ? "Hide" : "Show"}
          </div>
          {showTranscript && (
            <div className="cell transcript">
              <div>{transcript}</div>
              <audio controls src="/testaudio.mp4">
                Your browser does not support the <code>audio</code> element.
              </audio>
            </div>
          )}
        </>
      )}
    </div>
  );
};
