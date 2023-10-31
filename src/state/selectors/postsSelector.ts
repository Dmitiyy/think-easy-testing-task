import { selector } from "recoil";
import { pageState, postsState, searchState } from "../atoms/postsAtom";

export const postsSelector = selector({
  key: 'postsSelector',
  get: ({ get }) => {
    const data = get(postsState);
    const page = get(pageState);

    const search = get(searchState);
    const filteredData = data.filter(post => {
      return (
        post.title.toLowerCase().includes(search) ||
        post.content.toLowerCase().includes(search)
      );
    })

    return (search.length === 0 ? data : filteredData).slice(0, page * 12);
  }
})