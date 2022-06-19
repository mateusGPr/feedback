import { gql } from "@apollo/client";

export const studioIdPage = gql`
query ($id: Int!) {
  Studio(id: $id) {
    id
    name
    isFavourite
    media {
      edges {
        isMainStudio
        node {
          id
          title {
            romaji
            english
          }
        }
      }
    }
  }
}`;
