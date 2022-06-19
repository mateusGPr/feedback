import { gql } from "@apollo/client";

export const userIdFollowers = gql`
query ($id: Int!) {
  Page {
    followers(userId: $id) {
      id
      name
      avatar {
        large
      }
    }
  }
}`;