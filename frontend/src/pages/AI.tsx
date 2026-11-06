import { useEffect, useState } from "react";

type AIrespones = {
  answer: "";
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

  console.log(response.answer)
  response.answer.split("\n\n---\n\n### ").forEach((ans) => {
    console.log(ans);
  });

  console.log(typeof response);
  return (
    <div>
      {/* <ul> */}
        {/* {response.answer.split("\n\n---\n\n### ").map((ans: string, idx: number) => {
          <li key={idx}>{ans}</li>;
        })} */}
      {/* </ul> */}
    </div>
  );
};

export default AI;
