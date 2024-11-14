import { useState } from "react";
import "./FAQs.css";

function FAQSection() {
  // Sample FAQs
  const faqs = [
    {
      question: "What is UniGuide?",
      answer:
        "UniGuide is a career guidance tool that helps students discover career paths aligned with their interests, skills, and goals.",
    },
    {
      question: "How do I use the career recommendation tool?",
      answer:
        "Just answer a few simple questions about your interests and career goals. Based on your answers, UniGuide will suggest a suitable career path for you.",
    },
    {
      question: "Is UniGuide free to use?",
      answer:
        "Yes, UniGuide is free to use. Our goal is to make career guidance accessible to everyone.",
    },
    {
      question: "Can I reset my answers?",
      answer:
        "Yes, after completing the quiz, you can restart it from the beginning to answer the questions again.",
    },
    {
      question: "Where can I find more information?",
      answer:
        "You can contact us through the feedback section or visit our About page for more details.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section" id="faq">
      <h2>Frequently Asked Questions</h2>
      <ul className="faq-list">
        {faqs.map((faq, index) => (
          <li key={index} className="faq-item">
            <div
              className={`faq-question ${
                activeIndex === index ? "active-faq" : ""
              }`}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
            </div>
            {activeIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FAQSection;
