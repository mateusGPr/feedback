import { gql } from "@apollo/client";

export const tags = gql`
{
  MediaTagCollection {
    id
    name
    description
    category
    rank
    isGeneralSpoiler
    isAdult
  }
}`;
