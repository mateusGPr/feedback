import { gql } from "@apollo/client";

export const userAiring = gql`
{
  Page {
    media (onList: true, status: RELEASING) {
      id
      title {
        userPreferred
      }
      nextAiringEpisode {
        airingAt
        timeUntilAiring
        episode
      }
    }
  }
}`;
