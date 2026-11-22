import { describe, expect, it } from "vitest";

import { knowledgeArticles } from "../data/knowledge";
import { buildLocalAnswer, retrieveLocalKnowledge } from "./assistant";

describe("local knowledge retrieval", () => {
  it("prioritizes reviewer guidance for a certification question", () => {
    const [match] = retrieveLocalKnowledge("What context supports a certification review?", knowledgeArticles);
    expect(match?.id).toBe("review-context");
  });

  it("does not invent an answer when there is no supported match", () => {
    const result = buildLocalAnswer("How do I configure payroll?", knowledgeArticles);
    expect(result.citations).toHaveLength(0);
    expect(result.answer).toContain("could not find");
  });
});
