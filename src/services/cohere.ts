import MODELS_EXAMPLES from "@/constants/ml_examples";
import type { separateResponses } from "@/utils";

import cohere from "cohere-ai";
cohere.init("gqg1O2uUDIN3TZJ3D4Q8irvPDGFEr56IHSeRMaXv");

const getPredictions = (prediction: string) => {
  if (prediction === "Excellent") return 2;
  if (prediction === "Good") return 1;
  if (prediction === "Bad") return 0;
  return 0;
};

export const outputQuestions = async (data: typeof separateResponses) => {
  const callQuestions = Object.entries(data).map(([key, value]) => {
    const examples = MODELS_EXAMPLES[key as keyof typeof MODELS_EXAMPLES];
    return cohere.classify({
      inputs: value,
      examples,
    });
  });

  const questions = await Promise.all(callQuestions);

  console.log(questions);

  const clasify = {
    mood: questions[0].body.classifications.reduce(
      (acc, curr) => {
        return {
          prediction: acc.prediction + getPredictions(curr.prediction),
          confidence: acc.confidence + curr.confidence,
        };
      },
      {
        prediction: 0,
        confidence: 0,
      }
    ),
    sleep: questions[1].body.classifications.reduce(
      (acc, curr) => {
        return {
          prediction: acc.prediction + getPredictions(curr.prediction),
          confidence: acc.confidence + curr.confidence,
        };
      },
      {
        prediction: 0,
        confidence: 0,
      }
    ),
    physical: questions[2].body.classifications.reduce(
      (acc, curr) => {
        return {
          prediction: acc.prediction + getPredictions(curr.prediction),
          confidence: acc.confidence + curr.confidence,
        };
      },
      {
        prediction: 0,
        confidence: 0,
      }
    ),
    nutrition: questions[3].body.classifications.reduce(
      (acc, curr) => {
        return {
          prediction: acc.prediction + getPredictions(curr.prediction),
          confidence: acc.confidence + curr.confidence,
        };
      },
      {
        prediction: 0,
        confidence: 0,
      }
    ),
  };

  const prom_classify = {
    mood: {
      prediction: Math.ceil(
        clasify.mood.prediction / questions[0].body.classifications.length
      ),
      confidence:
        clasify.mood.confidence / questions[0].body.classifications.length,
    },
    sleep: {
      prediction: Math.ceil(
        clasify.sleep.prediction / questions[1].body.classifications.length
      ),
      confidence:
        clasify.sleep.confidence / questions[1].body.classifications.length,
    },
    physical: {
      prediction: Math.ceil(
        clasify.physical.prediction / questions[2].body.classifications.length
      ),
      confidence:
        clasify.physical.confidence / questions[2].body.classifications.length,
    },
    nutrition: {
      prediction: Math.ceil(
        clasify.nutrition.prediction / questions[3].body.classifications.length
      ),
      confidence:
        clasify.nutrition.confidence / questions[2].body.classifications.length,
    },
  };

  return {
    mood_confidence: prom_classify.mood.confidence,
    mood_prediction: prom_classify.mood.prediction,
    physical_confidence: prom_classify.physical.confidence,
    physical_prediction: prom_classify.physical.prediction,
    sleep_confidence: prom_classify.sleep.confidence,
    sleep_prediction: prom_classify.sleep.prediction,
    nutrition_confidence: prom_classify.nutrition.confidence,
    nutrition_prediction: prom_classify.nutrition.prediction,
  };
};

export const generateQuestions = async () => {
  const callQuestions = ["mood", "sleep", "physical", "nutrition"].map((item) =>
    cohere.generate({
      model: "command-xlarge-20221108",
      prompt: `Generate 3 questions about ${item} behavior for a patient, numbered 1. 2. and 3.`,
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
