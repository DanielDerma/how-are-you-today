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
