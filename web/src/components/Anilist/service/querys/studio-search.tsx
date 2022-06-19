import { gql } from "@apollo/client";

export const studioSearch = gql`
query ($query: String) {
  Page {
    studios(search: $query) {
      id
      name
    }
  }
}`;
