import { http, HttpResponse } from "msw";
import { POST_LIST, POSTS_DETAIL } from "./dummy/dummy";

export const handlers = [
  http.get("/posts", () => {
    return HttpResponse.json({ POST_LIST });
  }),
  http.get("/posts/:id", ({ params }) => {
    const { id } = params;

    const numbericId = Number(id);

    if (numbericId && POSTS_DETAIL[numbericId]) {
      return HttpResponse.json(POSTS_DETAIL[numbericId]);
    }

    return new HttpResponse(null, {
      status: 404,
      statusText: "Post not found",
    });
  }),
];
