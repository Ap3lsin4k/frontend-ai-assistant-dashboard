import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState } from "react";

const QuoteMsg = () => {
  const [isQuoteExpanded, setIsQuoteExpanded] = useState(false);

  const toggleQuote = () => {
    setIsQuoteExpanded(!isQuoteExpanded);
  };

  return (
    <div
      className={`msg-quote ${isQuoteExpanded ? "expanded" : ""}`}
      onClick={toggleQuote}
    >
      <div className="msg-quote-summary">
        CT scan findings ...
        <span className="arrow">
          {isQuoteExpanded ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </div>
      {isQuoteExpanded && (
        <div className="msg-quote-content">
          we did a CT scan last month as a part of the initial diagnosis and
          also conducted memory tests as a part of the initial assessment. We
          had to forward the CT scan findings to the neurology department and
          now we have a response. We would like to see you for another
          consultation. We have available slot this Friday 3:00pm. Can you
          please come to Springfield University hospital psychiatry department
          so we can discuss this further. Please bring someone who you`d like to
          join for this appointment.
        </div>
      )}
    </div>
  );
};

export default QuoteMsg;
