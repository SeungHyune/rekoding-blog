import { createUniqueHeadingId } from "../createHeadingId/createHeadingId";

const extractTitles = (markdown: string) => {
  const titles = markdown.match(/^(#+)\s+(.*)$/gm);
  if (!titles) return [];

  const headingIdCountMap = new Map<string, number>();

  return titles.map((title) => {
    const match = title.match(/^(#+)/);
    const heading = match ? match[0].length : 0;
    const text = title.replace(/^(#+)\s+/, "").trim();
    const gapRemoveText = createUniqueHeadingId(text, headingIdCountMap);

    return { heading, text, gapRemoveText }; // 레벨, 텍스트, HTML 태그 포함
  });
};

export default extractTitles;
