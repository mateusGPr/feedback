import { gql } from "@apollo/client";

export const staffId = gql`
query ($id: Int!) {
  Staff(id: $id) {
    id
    name {
      first
      last
      native
    }
    description
    language
  }
}`;
