import { postsRef } from "src/config/firebase";
export const CREATE_POSTS = "create_posts";

export function createPost(values, callback) {
  return dispatch => {
    postsRef
      .add({
        content: values.content,
      })
      .then(() => {
        dispatch({ type: "CREATE_POSTS" });
        callback();
      });
  };
}
