import { useEffect, useState } from "react";

type Question = {
  id: number;
  question: string;
  options: string[];
  answer: string;
};

const AI = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getQuestions = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/ai`);

        if (!res.ok) {
          throw new Error("Failed to fetch questions");
        }

        const data = await res.json();

        console.log("Backend response:", data);

        if (!data.answer) {
          throw new Error("Gemini returned an empty answer");
        }

        const parsedQuestions: Question[] = JSON.parse(data.answer);

        setQuestions(parsedQuestions);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    getQuestions();
  }, []);

  if (loading) return <p>Generating questions...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {questions.map((q) => (
        <div key={q.id}>
            <ul>
          <h3>{q.question}</h3>

          {q.options.map((option, index) => (
            <li key={index}>{index+1}: {option}</li>
          ))}

          <p>Answer: {q.answer}</p>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default AI;
