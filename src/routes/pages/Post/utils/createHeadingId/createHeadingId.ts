export const createHeadingId = (text: string) => {
  return text
    .replace(/[.()\\/,:'`?]/g, "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-");
};

export const createUniqueHeadingId = (
  text: string,
  headingIdCountMap: Map<string, number>,
) => {
  const headingId = createHeadingId(text);
  const headingIdCount = headingIdCountMap.get(headingId) ?? 0;
  headingIdCountMap.set(headingId, headingIdCount + 1);

  if (headingIdCount === 0) {
    return headingId;
  }

  return `${headingId}-${headingIdCount + 1}`;
};
