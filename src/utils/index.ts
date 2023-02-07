export const separateResponses = (responses: any) => {
  let mood = [] as string[];
  let sleep = [] as string[];
  let physical = [] as string[];
  let nutrition = [] as string[];

  Object.entries(responses).forEach(([key, value]) => {
    if (key.startsWith("mood_")) {
      mood.push(`${key.replace("mood_", "")} ${value}`);
    } else if (key.startsWith("sleep_")) {
      sleep.push(`${key.replace("sleep_", "")} ${value}`);
    } else if (key.startsWith("physical_")) {
      physical.push(`${key.replace("physical_", "")} ${value}`);
    } else if (key.startsWith("nutrition_")) {
      nutrition.push(`${key.replace("nutrition_", "")} ${value}`);
    }
  });

  return {
    mood,
    sleep,
    physical,
    nutrition,
  };
};

export const calculateTimeRest = (dateString: string | null | undefined) => {
  if (!dateString) return 0;
  const now = new Date();
  const date = new Date(dateString);
  const diff = now.getTime() - date.getTime();
  const timeRest = 24 - Math.floor(diff / (1000 * 60 * 60));
  return timeRest;
};

export function canInvoice(lastInvoiceDate: string | null | undefined) {
  if (!lastInvoiceDate) return true;
  const now = new Date();
  const twentyFourHoursAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);
  const parsedLastInvoiceDate = new Date(lastInvoiceDate);
  return parsedLastInvoiceDate < twentyFourHoursAgo;
}
