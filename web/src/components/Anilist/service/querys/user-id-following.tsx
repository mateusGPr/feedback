import { gql } from "@apollo/client";

export const userIdFollowing = gql`
query ($id: Int!) {
  Page {
    following(userId: $id) {
      id
      name
      avatar {
        large
      }
    }
  }
}`;