"use client";
import "./LiveCall.scss";
import React, { useEffect, useState } from "react";

interface Message {
  from_: string;
  content: string;
}

const App: React.FC = () => {
  const [liveText, setLiveText] = useState<Message[]>([]);
  const [message, setMessage] = useState<Message>();

  useEffect(() => {
    const ws = new WebSocket(
      "wss://prototypebe.mavn.ai:443/api/conversations/stream",
    );

    ws.onmessage = (event) => {
      try {
        const data: Message = JSON.parse(event.data);
        setMessage(data);

        if (data.from_ !== message?.from_) {
          setLiveText((prevLiveText) => [
            ...prevLiveText,
            { from_: message?.from_ || "", content: message?.content || "" },
          ]);
        }
      } catch (error) {
        console.error("Error parsing message:", error);
      }
    };

    ws.onopen = () => {
      console.log("WebSocket connection established");
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    ws.onclose = () => {
      console.log("WebSocket connection closed");
    };

    return () => {
      ws.close();
    };
  }, [liveText, message]);

  return (
    <div>
      {liveText.length === 0 && !message ? (
        <div className="live-call_placeholder">
          No incoming call at the time
        </div>
      ) : (
        <div className="live-call_area">
          {liveText
            .filter((msg) => msg.content !== "NEXTMESSAGE" && msg.from_ !== "")
            .map((msg, index) => (
              <div key={index} className="live-call_msg live-text">
                <span className="live-call_from">{msg.from_}:</span>{" "}
                <span dangerouslySetInnerHTML={{ __html: msg.content }} />
              </div>
            ))}
          {message && message.content !== "NEXTMESSAGE" && (
            <div className="live-call_msg msg">
              <span className="live-call_from">{message.from_}:</span>{" "}
              {message.content}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
