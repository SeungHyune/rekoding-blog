const splitMarkdownIntoSections = (markdownText: string) => {
  const SECTION_REGEX = /^#{1,6} .+$/gm;
  const sections: Array<{ header: string; content: string; fullText: string }> =
    [];

  // 모든 헤더 위치 찾기
  const headerIndices: number[] = [];

  // 헤더가 아닌 문자열부터 처음 헤더까지의 문자열
  const initialContent = markdownText.match(/^([\s\S]*?)(?=\n?#{1,6} )/m);
  if (initialContent && initialContent[0]) {
    headerIndices.push(0);
  }

  let match;
  while ((match = SECTION_REGEX.exec(markdownText)) !== null) {
    headerIndices.push(match.index);
  }

  // 헤더를 기준으로 섹션 분할
  for (let i = 0; i < headerIndices.length; i++) {
    const start = headerIndices[i];
    const end = headerIndices[i + 1] || markdownText.length;

    const sectionText = markdownText.slice(start, end).trim();
    const [header, ...contentLines] = sectionText.split("\n");

    sections.push({
      header: header.trim(),
      content: contentLines.join("\n").trim(),
      fullText: sectionText,
    });
  }

  return sections;
};

export default splitMarkdownIntoSections;
