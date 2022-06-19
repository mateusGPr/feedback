import { gql } from "@apollo/client";

export const studioId = gql`
query ($id: Int!) {
  Studio(id: $id) {
    id
    name
    isFavourite
  }
}`;
