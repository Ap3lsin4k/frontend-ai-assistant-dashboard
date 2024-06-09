"use client";
import "./CallsTable.scss";

import { MdOutlineDateRange } from "react-icons/md";
import { FaMicrophone, FaUserCheck } from "react-icons/fa";
import { useState } from "react";
import { RowDataType } from "@/declaration/RowData";

export default function CallsTable({ rowData }: { rowData: RowDataType[] }) {
  return (
    <div className="calls-table">
      <div className="table-header">
        <div>
          <MdOutlineDateRange />
          Date & Time
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
  );
}

const TableRow = ({ rowData }: { rowData: RowDataType }) => {
  const { date, number, threat, group, transcript, audio } = rowData;
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
      <div>
        <DateTimeDisplay date={date} />
      </div>
      <div>{number}</div>
      <div className={`cell-score ${threat > 5 ? "green" : "red"}`}>
        {threat}
      </div>
      <div className="btn-wrapper">
        {group ? (
          <div>{group}</div>
        ) : clickedText ? (
          <div>{clickedText}</div> //  TODO!: add request to move number to allowed list
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
              <div>
                {transcript.map((el, index) => {
                  return (
                    <div key={index}>
                      <span className="transcribe_title">{el.from_}: </span>
                      <span>{el.content}</span>
                    </div>
                  );
                })}
              </div>
              <audio controls src={audio}>
                Your browser does not support the <code>audio</code> element.
              </audio>
            </div>
          )}
        </>
      )}
    </div>
  );
};

const DateTimeDisplay = ({ date }: { date: string }) => {
  const formattedTime = new Date(date);

  const formattedDate = formattedTime.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const formattedHours = formattedTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <span className="cell-date">
      {formattedDate}
      {"   "}
      {formattedHours}
    </span>
  );
};
