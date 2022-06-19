import { gql } from "@apollo/client";

export const staffSearch = gql`
query ($query: String) {
  Page {
    staff(search: $query) {
      id
      name {
        first
        last
      }
      image {
        medium
        large
      }
    }
  }
}`;
