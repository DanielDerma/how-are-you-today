export const mood = [
  {
    id: 1,
    question: "How would you describe your mood today?",
    name: "mood_feel",
    type: "text",
  },
  {
    id: 2,
    question: "Journal about your emotions and thoughts throughout the day",
    name: "mood_journal",
    type: "text",
  },
  {
    id: 3,
    question: "What events or situations improved or worsened your mood?",
    name: "mood_events",
    type: "text",
  },
];

export const sleep = [
  {
    id: 1,
    question: "How many hours of sleep did you get last night?",
    name: "sleep_hours",
    type: "range",
  },
  {
    id: 2,
    question: "What time did you go to bed last night?",
    name: "sleep_bedtime",
    type: "time",
  },
  {
    id: 3,
    question:
      "Did you have any caffeine or screen time before bed?, If so, how much?",
    name: "sleep_caffeine",
    type: "text",
  },
];

export const physical = [
  {
    id: 1,
    question: "How many hours of exercise did you get today?",
    name: "physical_hours",
    type: "range",
  },
  {
    id: 2,
    question: "What activities did you do today?",
    name: "physical_activities",
    type: "text",
  },
  {
    id: 3,
    question: "What challenges did you face today with physical activity?",
    name: "physical_challenges",
    type: "text",
  },
];

export const nutrition = [
  {
    id: 3,
    question:
      "How healthy would you rate each meal you had today, on a scale of 1-10?",
    name: "nutrition_rating",
    type: "range",
  },
  {
    id: 1,
    question: "What types of food did you eat today?",
    name: "nutrition_food",
    type: "text",
  },
  {
    id: 2,
    question: "What time did you eat each meal?",
    name: "nutrition_meals",
    type: "text",
  },

  {
    id: 4,
    question:
      "What challenges or temptations did you face in maintaining a healthy diet today? For example, unhealthy food cravings or limited access to healthy food options.",
    name: "nutrition_challenges",
    type: "text",
  },
];
