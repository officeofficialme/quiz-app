import { useEffect, useState } from "react";

type AIrespones = {
  answer: string;
};

const AI = () => {
  const [response, setRespone] = useState<AIrespones>({ answer: "" });
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/ai`)
      .then((res) => res.json())
      .then((aiRes) => {
        setRespone(aiRes);
      });
  }, []);

  console.log(response.answer);
  const answer = response.answer
    ? response.answer.split("\n\n---\n\n### ")
    : [];

  console.log(typeof response);
  return (
    <div>
      <ul>
        {answer.map((ans, key) => (
            <li key={key}>{ans}</li>
        ))}
      </ul>
    </div>
  );
};

export default AI;
