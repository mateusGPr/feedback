import { gql } from "@apollo/client";

export const userSearch = gql`
query ($query: String) {
  Page {
    users(search: $query) {
      id
      name
      avatar {
        medium
        large
      }
    }
  }
}`;