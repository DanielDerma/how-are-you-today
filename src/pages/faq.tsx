import Head from "next/head";

const questions = [
  {
    id: 1,
    question: 'Q: What is the "How Are You Today?" app?',
    answer:
      'A: The "How Are You Today?" app is a self-help psychology app that helps users track and improve their mental and emotional well-being. The app collects data through a series of daily questions and provides personalized recommendations and support based on the users behavior and mood.',
  },
  {
    id: 2,
    question: "Q: What kind of information does the app collect?",
    answer:
      "A: The app collects information about the users mood, sleep, physical activity, nutrition, stress levels, self-care and relaxation activities, task and project completion, positive and negative thoughts and emotions, interactions with others, and more.",
  },
  {
    id: 3,
    question: "Q: How do I use the app?",
    answer:
      "A: Simply use the web app on your smartphone and answer the daily questions. You can also track your progress and see personalized recommendations by accessing the dashboard.",
  },
  {
    id: 4,
    question: "Q: How often do I need to use the app?",
    answer:
      "A: It is recommended to use the app every day to get the most benefit and track your progress over time.",
  },
  {
    id: 5,
    question: "Q: How much does the app cost?",
    answer: "A: The app is free to use.",
  },
  {
    id: 6,
    question: "Q: Is my information safe and secure?",
    answer:
      "A: Yes, the app takes privacy and security very seriously and uses the latest encryption and security measures to protect the users information.",
  },
  {
    id: 7,
    question: "Q: Can the app provide professional help or therapy?",
    answer:
      "A: The app is not a substitute for professional help or therapy, but it can provide support and resources for those seeking to improve their mental and emotional well-being.",
  },
];

const faq = () => {
  return (
    <>
      <Head>
        <title>FAQ | How Are You Today?</title>
      </Head>
      <div className="md:columns-2">
        {questions.map((question) => (
          <div key={question.id} className="mb-4">
            <p className="font-semibold">{question.question}</p>
            <p className="font-medium">{question.answer}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default faq;
