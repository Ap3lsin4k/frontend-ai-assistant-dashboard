"use client";

import { useState, ReactNode, useEffect } from "react";
import Image from "next/image";
import { SiChatbot } from "react-icons/si";
import { FaTrash } from "react-icons/fa";
import "./page.scss";
import { IoMail, IoCalendarClearSharp } from "react-icons/io5";
import { TbMapPinFilled } from "react-icons/tb";
import QuoteMsg from "@/app/chatbot/quoteMsg";
import { getLastCalls } from "@/requests/ChatBotRequest";
import { AllCalls } from "@/declaration/AllCalls";
import { FaPhone } from "react-icons/fa6";

type Message =
  | { text: string; type: "user"; timestamp: string }
  | { content: ReactNode; type: "bot"; timestamp: string };

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [question, setQuestion] = useState("");
  const [answerIndex, setAnswerIndex] = useState(0);

  const [calls, setCalls] = useState<AllCalls[]>([]);

  useEffect(() => {
    getLastCalls().then((data) => {
      setCalls(data);
    });
  }, []);

  const isToday = (dateString: string) => {
    const today = new Date();
    const date = new Date(dateString);
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const todayCalls = calls.filter((call) => isToday(call.date));

  const handleSend = () => {
    if (question.trim()) {
      const newMessage: Message = {
        text: question,
        type: "user",
        timestamp: new Date().toLocaleTimeString(),
      };

      setMessages([...messages, newMessage]);
      setQuestion("");

      setTimeout(() => {
        const newAnswer: Message = {
          type: "bot",
          content: answers[answerIndex],
          timestamp: new Date().toLocaleTimeString(),
        };

        setMessages((prevMessages) => [...prevMessages, newAnswer]);

        if (answerIndex < answers.length - 1) {
          setAnswerIndex(answerIndex + 1);
        }
      }, 1000); // 1-second delay before displaying the answer
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSend();
    }
  };

  const handleReload = () => {
    window.location.reload();
  };

  const answers: ReactNode[] = [
    <div key="1">
      <div>Your mom received {todayCalls.length} calls today.</div>
      <div>
        {todayCalls && (
          <div>
            <br />
            <FaPhone />
            There is a list:
          </div>
        )}
        {todayCalls.map((call, index) => {
          return (
            <a
              href={`tel:${call.number}`}
              className="msg-contact phone"
              key={index}
            >
              {call.number}
            </a>
          );
        })}
        <div>
          <br />
          There is one from
          <a href="mailto: Dr.Smith@gmail.com" className="msg-contact">
            <IoMail />
            <span>Mark Dunford - Psychiatrist</span>
          </a>
          @ Springfield University Hospital, that you would be specifically
          interested about.
        </div>
      </div>
    </div>,
    <div key="2">
      <a href="mailto: Dr.Smith@gmail.com" className="msg-contact">
        <IoMail />
        <span>Mark Dunford - Psychiatrist</span>
      </a>
      @ Springfield University Hospital wanted to see you and your mom for a
      consultation on
      <span className="msg-calendar">
        <IoCalendarClearSharp /> Friday 3pm
      </span>
      at
      <a
        href="https://www.google.com/maps/place/Springfield+University+Hospital/@51.4197512,-0.2229224,12z/data=!4m21!1m14!4m13!1m5!1m1!1s0x487605e6ccbf63c3:0xe9f19e67ec3ffb2!2m2!1d-0.1678056!2d51.4361581!1m6!1m2!1s0x487605e4175052d3:0x7f4854749d06db58!2sTrinity+Building,+15+Springfield+Dr,+London+SW17+0YF!2m2!1d-0.1718014!2d51.4385846!3m5!1s0x487605e4175052d3:0x7f4854749d06db58!8m2!3d51.4385846!4d-0.1718014!16s%2Fm%2F09gd547?entry=ttu"
        className="msg-contact"
      >
        <TbMapPinFilled /> Springfield University Hospital
      </a>
      <QuoteMsg />
    </div>,
    <div key="3">
      <div>Sorry, i didn`t understand your question.</div>
    </div>,
  ];

  return (
    <div className="container">
      <h1>AI assistant</h1>
      <div className="chatBox">
        <div className="messages">
          {messages.length === 0 && (
            <div className="startMessage">Start the conversation...</div>
          )}
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.type}`}>
              {message.type === "user" ? (
                <>
                  <div className="messageHeader">
                    <Image
                      src="https://i.ibb.co/0tDWH0P/avatar.png"
                      alt="Avatar"
                      height={30}
                      width={30}
                    />
                    <span className="messageName">YOU</span>
                    <span className="messageTime">{message.timestamp}</span>
                  </div>
                  <div className="messageText">{message.text}</div>
                </>
              ) : (
                <>
                  <div className="messageHeader">
                    <SiChatbot size={20} />
                    <span className="messageName">AI Assistant</span>
                    <span className="messageTime">{message.timestamp}</span>
                  </div>
                  <div className="messageText">{message.content}</div>
                </>
              )}
            </div>
          ))}
        </div>
        <div className="inputBox">
          <input
            autoFocus
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your question here..."
          />
          <button onClick={handleSend}>Send</button>
          <button className="reloadButton" onClick={handleReload}>
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
}
