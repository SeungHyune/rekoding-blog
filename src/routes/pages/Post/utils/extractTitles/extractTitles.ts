const extractTitles = (markdown: string) => {
  const titles = markdown.match(/^(#+)\s+(.*)$/gm);
  if (!titles) return [];

  return titles.map((title) => {
    const match = title.match(/^(#+)/);
    const heading = match ? match[0].length : 0;
    const text = title.replace(/^(#+)\s+/, "").trim();
    const textLowerCase = text.replace(/[.()\\/,:'`]/g, "").toLowerCase();
    const gapRemoveText = textLowerCase.replace(/\s+/g, "-");

    return { heading, text, gapRemoveText }; // 레벨, 텍스트, HTML 태그 포함
  });
};

export default extractTitles;
