import React, { useState, useEffect, useRef } from "react";
import "./LiveCall.scss"; // Import your CSS file for styling

const ConversationSimulator = () => {
  const [conversation, setConversation] = useState<string[]>([]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const conversationRef = useRef<HTMLDivElement>(null);

  // Simulate a conversation
  const simulateConversation = () => {
    const conversation = [
      "Mrs. Jenkins: Hello?",
      "Mr. Smith: Good morning, ma'am. This is Mr. Smith calling from the Social Security Administration. We've detected some suspicious activity on your account and need to verify your information to prevent any further issues.",
      "Mrs. Jenkins: Oh my! What sort of activity?",
      "Mr. Smith: It appears that your Social Security number has been compromised and has been linked to several fraudulent activities. To rectify this, we need to verify your identity. Can you please provide me with your Social Security number and other personal details?",
      "Mrs. Jenkins: Oh dear! But how can I be sure you're really from the Social Security Administration?",
      "Mr. Smith: Ma'am, I understand your concern, but rest assured, this is a matter of utmost urgency. We can't delay in resolving this issue. Now, could you please provide me with your information?",
      "Mrs. Jenkins: Well, I'm not comfortable giving out such sensitive information over the phone. Is there any other way we can verify this?",
    ];
    setConversation(conversation);
  };

  useEffect(() => {
    // Start simulating conversation when component mounts
    simulateConversation();
  }, []);

  useEffect(() => {
    // Update current message index at intervals to simulate live conversation
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) =>
        prevIndex < conversation.length - 1 ? prevIndex + 1 : prevIndex,
      );
    }, 3000); // Change the interval to control the speed of the conversation

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [conversation]);

  // Scroll to the bottom of the conversation
  useEffect(() => {
    if (conversationRef.current) {
      conversationRef.current.scrollTop = conversationRef.current.scrollHeight;
    }
  }, [currentMessageIndex]);

  // Render the entire conversation up to the current message index
  const renderConversation = () => {
    return conversation
      .slice(0, currentMessageIndex + 1)
      .map((message, index) => (
        <div key={index} className="conversation">
          {message}
        </div>
      ));
  };

  return (
    <div className="live-call_area" ref={conversationRef}>
      {renderConversation()}
    </div>
  );
};

export default ConversationSimulator;
