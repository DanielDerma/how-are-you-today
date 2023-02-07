import cohere from "cohere-ai";
cohere.init(process.env.COHERE_API || "");

const inputs = ["This is a sad situation"];

const examples = [
  {
    text: "I feel so bad",
    label: "sad",
  },
  {
    text: "I feel so good",
    label: "happy",
  },
  {
    text: "I'm feeling empty",
    label: "sad",
  },
  {
    text: "I'm feeling full bad bad",
    label: "sad",
  },
  {
    text: "I'm not feeling anything",
    label: "sad",
  },
  {
    text: "I'm feeling great",
    label: "happy",
  },
];

export const example = async () => {
  const response = await cohere.classify({
    inputs,
    examples,
  });
  return response;
};

export const generateQuestions = async () => {
  const callQuestions = ["mood", "sleep", "physical", "nutrition"].map((item) =>
    cohere.generate({
      model: "command-xlarge-20221108",
      prompt: `Generate 2 psychology questions about a patient's ${item} behavior today, numbered 1. and 2.`,
      max_tokens: 500,
      temperature: 1.2,
      k: 0,
      p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      stop_sequences: [],
      return_likelihoods: "NONE",
    })
  );

  const res = await Promise.all(callQuestions);

  const { generations: mood } = res[0].body;
  const { generations: sleep } = res[1].body;
  const { generations: physical } = res[2].body;
  const { generations: nutrition } = res[3].body;
  return {
    mood: mood[0].text
      .split(/\n\d+\./)
      .filter((part: any) => part.trim() !== ""),
    sleep: sleep[0].text
      .split(/\n\d+\./)
      .filter((part: any) => part.trim() !== ""),
    physical: physical[0].text
      .split(/\n\d+\./)
      .filter((part: any) => part.trim() !== ""),
    nutrition: nutrition[0].text
      .split(/\n\d+\./)
      .filter((part: any) => part.trim() !== ""),
  };
};
