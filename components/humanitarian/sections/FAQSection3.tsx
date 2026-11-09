import Link from "next/link";
import "./homepage-faq.css";

const questions = [
  {
    question: "What is the mission of our foundation?",
    answer: "Our team brings humanitarian assistance and hope to people and communities facing some of the greatest needs around the world.",
  },
  {
    question: "How can I make a donation?",
    answer: <>Visit the <Link href="/donate">giving page</Link> to explore ways to support humanitarian work. The giving form on this site is a preview.</>,
  },
  {
    question: "How do I get involved or volunteer?",
    answer: <>Visit the <Link href="/contact">contact page</Link> for ways to learn about volunteering, sharing your skills, or partnering with humanitarian organisations.</>,
  },
  {
    question: "What measurable impact has the foundation achieved?",
    answer: "Our team report more than four billion lives touched, two million communities transformed, and ten million acts of kindness across 120 countries.",
  },
  {
    question: "Who are your partners and sponsors?",
    answer: "Our team work alongside community leaders, local organisations, international nonprofits, and corporate supporters to extend the reach of its humanitarian programmes.",
  },
];

export function FAQSection3() {
  return (
    <section className="homepage-faq" id="faq" aria-labelledby="homepage-faq-title">
      <div className="homepage-faq-inner">
        <header>
          <p className="homepage-faq-label">FAQ</p>
          <h2 id="homepage-faq-title">Frequently Asked Questions</h2>
          <p>Learn about Our team’s humanitarian work and ways to get involved.</p>
        </header>
        <div>
          {questions.map(({ question, answer }, index) => (
            <details key={question} name="homepage-faq" open={index === questions.length - 1}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
