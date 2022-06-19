import { gql } from "@apollo/client";

export const seriesIdAiring = gql`
query ($mediaId: Int!) {
  AiringSchedule(mediaId: $mediaId) {
    id
    airingAt
    timeUntilAiring
    episode
    media {
      id
      # ...
    }
  }
}`;

export const seriesIdAiringAlt = gql`
# Alternative

query ($id: Int!, $type: MediaType) {
  Media(id: $id, type: $type) {
    id
    # ...
    airingSchedule {
      nodes {
        id
        airingAt
        timeUntilAiring
        episode
      }
    }
  }
}`;
