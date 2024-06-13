"use client";
import "./CallsTable.scss";

import { MdOutlineDateRange } from "react-icons/md";
import { FaMicrophone, FaUserCheck } from "react-icons/fa";
import { useState } from "react";
import { RowDataType } from "@/declaration/RowData";
import DateTimeDisplay from "@/components/DateTimeDisplay/DateTimeDisplay";
import {
  addNumberToAllowed,
  addNumberToTrusted,
} from "@/requests/CallTableRequest";
import { useRouter } from "next/navigation";

export default function CallsTable({ rowData }: { rowData: RowDataType[] }) {
  return (
    <div className="calls-table">
      <div className="table-name">Calls history</div>
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
  const router = useRouter();

  const handleShowClick = () => {
    setShowTranscript(!showTranscript);
  };

  const handleClick = async (text: string, number: string) => {
    if (text === "Allow") {
      await addNumberToAllowed(number);
    } else {
      await addNumberToTrusted(number);
    }
    console.log("refresh before");
    router.refresh();
    console.log("refresh after");
  };

  return (
    <div className="table-row">
      <div>
        <DateTimeDisplay date={date} />
      </div>
      <div>{number}</div>
      <div className={`cell-score ${threat < 8 ? "green" : "red"}`}>
        {threat}
      </div>
      <div className="btn-wrapper">
        {group !== "unknown" ? (
          <div>
            {group === "allowed_list" ? "Allowed group" : "Trusted group"}
          </div>
        ) : (
          <>
            <div
              className="table_btv"
              onClick={() => handleClick("Trust", number)}
            >
              Trusted
            </div>
            <div
              className="table_btv"
              onClick={() => handleClick("Allow", number)}
            >
              Allowed
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
              <div className="transcribe-wrap">
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
