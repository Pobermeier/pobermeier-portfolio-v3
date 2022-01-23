export const AVG_WORDS_PER_MIN = 250;

export const getWordCount = (text: string) => text.match(/\w+/g)?.length ?? 0;

export const computeReadingTime = (text: string) => {
  const count = getWordCount(text);

  const timetoReadMin = Math.ceil(count / AVG_WORDS_PER_MIN);

  return timetoReadMin;
};
