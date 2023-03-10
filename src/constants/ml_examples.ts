const mood_examples = [
  { text: "How do you feel today? Terrible", label: "Bad" },
  { text: "Your mood today? Not so great., ", label: "Bad" },
  { text: "What's the mood like today? Disappointed., ", label: "Bad" },
  { text: "How are you feeling today? Awful., ", label: "Bad" },
  { text: "Mood check for today? Miserable., ", label: "Bad" },
  { text: "How do you feel today? Fantastic!, ", label: "Good" },
  { text: "Your mood today? Joyful., ", label: "Good" },
  { text: "What's the mood like today? Thrilled., ", label: "Good" },
  { text: "How are you feeling today? Blissful., ", label: "Good" },
  { text: "Mood check for today? Radiant., ", label: "Good" },
  { text: "How do you feel today? Phenomenal!, ", label: "Excellent" },
  { text: "Your mood today? Exhilarated., ", label: "Excellent" },
  { text: "What's the mood like today? Ecstatic., ", label: "Excellent" },
  { text: "How are you feeling today? Elated., ", label: "Excellent" },
  { text: "Mood check for today? Overjoyed., ", label: "Excellent" },
  { text: "6. How do you feel today? Frustrated., ", label: "Bad" },
  { text: "Your mood today? Annoyed., ", label: "Bad" },
  { text: "What's the mood like today? Irritated., ", label: "Bad" },
  { text: "How are you feeling today? Upset., ", label: "Bad" },
  { text: "Mood check for today? Pissed off., ", label: "Bad" },
  { text: "How do you feel today? Depressed., ", label: "Bad" },
  { text: "Your mood today? Blue., ", label: "Bad" },
  { text: "What's the mood like today? Low., ", label: "Bad" },
  { text: "How are you feeling today? Gloomy., ", label: "Bad" },
  { text: "Mood check for today? Dreary., ", label: "Bad" },
  { text: "Your mood today? Jolly., ", label: "Good" },
  { text: "What's the mood like today? Delighted., ", label: "Good" },
  { text: "How are you feeling today? Pleased., ", label: "Good" },
  { text: "Mood check for today? Radiant., ", label: "Good" },
  { text: "How do you feel today? Sunny., ", label: "Good" },
  { text: "Your mood today? Bright., ", label: "Good" },
  { text: "What's the mood like today? Chirpy., ", label: "Good" },
  { text: "How are you feeling today? Bubbly., ", label: "Good" },
  { text: "Mood check for today? Peppy., ", label: "Good" },
  { text: "Your mood today? Overwhelmed., ", label: "Excellent" },
  { text: "What's the mood like today? Blissful., ", label: "Excellent" },
  { text: "How are you feeling today? Enchanted., ", label: "Excellent" },
  { text: "Mood check for today? Thrilled., ", label: "Excellent" },
  { text: "How do you feel today? Extatic., ", label: "Excellent" },
  { text: "Your mood today? Over the moon., ", label: "Excellent" },
  { text: "What's the mood like today? Jubilant., ", label: "Excellent" },
  { text: "How are you feeling today? Euphoric., ", label: "Excellent" },
  { text: "Mood check for today? Ecstatic., ", label: "Excellent" },
];

const sleep_examples = [
  { text: "How was your sleep last night? Terrible", label: "Bad" },
  { text: "Sleep quality last night? Not so great., ", label: "Bad" },
  { text: "Did you sleep well last night? No, restless., ", label: "Bad" },
  { text: "How was your sleep last night? Awful., ", label: "Bad" },
  { text: "Sleep check for last night? Poor., ", label: "Bad" },
  { text: "How was your sleep last night? Fantastic!, ", label: "Good" },
  { text: "Sleep quality last night? Refreshed., ", label: "Good" },
  { text: "Did you sleep well last night? Yes, deeply., ", label: "Good" },
  { text: "How was your sleep last night? Blissful., ", label: "Good" },
  { text: "Sleep check for last night? Sound., ", label: "Good" },
  { text: "How was your sleep last night? Phenomenal!, ", label: "Excellent" },
  { text: "Sleep quality last night? Rejuvenating., ", label: "Excellent" },
  {
    text: "Did you sleep well last night? Yes, rejuvenated., ",
    label: "Excellent",
  },
  {
    text: "How was your sleep last night? Uninterrupted., ",
    label: "Excellent",
  },
  { text: "Sleep check for last night? Restful., ", label: "Excellent" },
  { text: "How was your sleep last night? Tossed and turned., ", label: "Bad" },
  { text: "Sleep quality last night? Fitful., ", label: "Bad" },
  {
    text: "Did you sleep well last night? No, kept waking up., ",
    label: "Bad",
  },
  { text: "How was your sleep last night? Disruptive., ", label: "Bad" },
  { text: "Sleep check for last night? Uncomfortable., ", label: "Bad" },
  { text: "How was your sleep last night? Short., ", label: "Bad" },
  { text: "Sleep quality last night? Unsatisfying., ", label: "Bad" },
  { text: "Did you sleep well last night? No, insufficient., ", label: "Bad" },
  { text: "How was your sleep last night? Long., ", label: "Good" },
  { text: "Sleep quality last night? Satisfying., ", label: "Good" },
  { text: "Did you sleep well last night? Yes, much needed., ", label: "Good" },
  { text: "How was your sleep last night? Peaceful., ", label: "Good" },
  { text: "Sleep check for last night? Relaxing., ", label: "Good" },
  { text: "How was your sleep last night? Dreamy., ", label: "Excellent" },
  { text: "Sleep quality last night? Heavenly., ", label: "Excellent" },
  {
    text: "Did you sleep well last night? Yes, dreamt deeply., ",
    label: "Excellent",
  },
  {
    text: "How was your sleep last night? Revitalizing., ",
    label: "Excellent",
  },
  { text: "Sleep check for last night? Energizing., ", label: "Excellent" },
];

const physical_examples = [
  { text: "How was your workout today? Terrible.", label: "Bad" },
  { text: "Your physical exercise today? Not so great.", label: "Bad" },
  { text: "What was your workout like today? Disappointed.", label: "Bad" },
  { text: "How was your physical activity today? Awful.", label: "Bad" },
  { text: "Exercise check for today? Miserable.", label: "Bad" },
  { text: "How was your workout today? Fantastic!", label: "Good" },
  { text: "Your physical exercise today? Joyful.", label: "Good" },
  { text: "What was your workout like today? Thrilled.", label: "Good" },
  { text: "How was your physical activity today? Blissful.", label: "Good" },
  { text: "Exercise check for today? Radiant.", label: "Good" },
  { text: "How was your workout today? Phenomenal!", label: "Excellent" },
  { text: "Your physical exercise today? Exhilarated.", label: "Excellent" },
  { text: "What was your workout like today? Ecstatic.", label: "Excellent" },
  { text: "How was your physical activity today? Elated.", label: "Excellent" },
  { text: "Exercise check for today? Overjoyed.", label: "Excellent" },
  { text: "How was your workout today? Frustrated.", label: "Bad" },
  { text: "Your physical exercise today? Annoyed.", label: "Bad" },
  { text: "What was your workout like today? Irritated.", label: "Bad" },
  { text: "How was your physical activity today? Upset.", label: "Bad" },
  { text: "Exercise check for today? Pissed off.", label: "Bad" },
  { text: "How was your workout today? Depressed.", label: "Bad" },
  { text: "Your physical exercise today? Blue.", label: "Bad" },
  { text: "What was your workout like today? Low.", label: "Bad" },
  { text: "How was your physical activity today? Gloomy.", label: "Bad" },
  { text: "Exercise check for today? Dreary.", label: "Bad" },
  { text: "Your physical exercise today? Jolly.", label: "Good" },
  { text: "What was your workout like today? Delighted.", label: "Good" },
  { text: "How was your physical activity today? Pleased.", label: "Good" },
  { text: "Exercise check for today? Radiant.", label: "Good" },
  { text: "How was your workout today? Sunny.", label: "Good" },
  { text: "Your physical exercise today? Bright.", label: "Good" },
  { text: "What was your workout like today? Chirpy.", label: "Good" },
  { text: "How was your physical activity today? Bubbly.", label: "Good" },
  { text: "Exercise check for today? Peppy.", label: "Good" },
  { text: "Your physical exercise today? Overwhelmed.", label: "Excellent" },
];

const nutrition_examples = [
  { text: "How was your nutrition today? Terrible", label: "Bad" },
  { text: "Your nutrition today? Not so great.", label: "Bad" },
  { text: "What was your nutrition like today? Poor.", label: "Bad" },
  { text: "How was your nutrition today? Awful.", label: "Bad" },
  { text: "Nutrition check for today? Poor.", label: "Bad" },
  { text: "How was your nutrition today? Fantastic!", label: "Good" },
  { text: "Your nutrition today? Great.", label: "Good" },
  { text: "What was your nutrition like today? Excellent.", label: "Good" },
  { text: "How was your nutrition today? Ideal.", label: "Good" },
  { text: "Nutrition check for today? Optimal.", label: "Good" },
  { text: "How was your nutrition today? Phenomenal!", label: "Excellent" },
  { text: "Your nutrition today? Perfect.", label: "Excellent" },
  { text: "What was your nutrition like today? Ideal.", label: "Excellent" },
  { text: "How was your nutrition today? Impeccable.", label: "Excellent" },
  { text: "Nutrition check for today? Superb.", label: "Excellent" },
  { text: "How was your nutrition today? Disappointed.", label: "Bad" },
  { text: "Your nutrition today? Unsatisfying.", label: "Bad" },
  { text: "What was your nutrition like today? Inadequate.", label: "Bad" },
  { text: "How was your nutrition today? Frustrating.", label: "Bad" },
  { text: "Nutrition check for today? Deficient.", label: "Bad" },
  { text: "Your nutrition today? Tasty.", label: "Good" },
  { text: "What was your nutrition like today? Delicious.", label: "Good" },
  { text: "How was your nutrition today? Satisfying.", label: "Good" },
  { text: "Nutrition check for today? Fulfilling.", label: "Good" },
  { text: "How was your nutrition today? Scrumptious.", label: "Good" },
  { text: "Your nutrition today? Wholesome.", label: "Good" },
  { text: "What was your nutrition like today? Nutritious.", label: "Good" },
  { text: "How was your nutrition today? Hearty.", label: "Good" },
  { text: "Nutrition check for today? Robust.", label: "Good" },
  { text: "Your nutrition today? Exemplary.", label: "Excellent" },
  {
    text: "What was your nutrition like today? Exceptional.",
    label: "Excellent",
  },
  { text: "How was your nutrition today? Phenomenal.", label: "Excellent" },
  { text: "Nutrition check for today? Outstanding.", label: "Excellent" },
  { text: "How was your nutrition today? Amazing.", label: "Excellent" },
  { text: "Your nutrition today? Incredible.", label: "Excellent" },
  {
    text: "What was your nutrition like today? Marvelous.",
    label: "Excellent",
  },
];

const MODELS_EXAMPLES = {
  mood: mood_examples,
  nutrition: nutrition_examples,
  physical: physical_examples,
  sleep: sleep_examples,
};

export default MODELS_EXAMPLES;
