import { gql } from "@apollo/client";

export const userActivityIdReply = gql`
query ($id: Int!) {
  Page {
    activityReplies(activityId: $id) {
      id
      text
      createdAt
      user {
        id
        name
        avatar {
          large
        }
      }
      likes {
        id
        name
        avatar {
          large
        }
      }
    }
  }
}`;