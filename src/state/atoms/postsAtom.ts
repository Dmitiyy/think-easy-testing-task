import { atom } from "recoil";

export type TPost = {
  authorId: string,
  content: string,
  createdAt: string,
  id: string,
  published: boolean,
  title: string,
  updatedAt: string
}

export const postsState = atom({
  key: "postsState",
  default: [] as Array<TPost>
})

export const pageState = atom({
  key: "pageState",
  default: 1 
})

export const searchState = atom({
  key: "searchState",
  default: ""
})