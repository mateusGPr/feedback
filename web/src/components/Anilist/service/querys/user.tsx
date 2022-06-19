import { gql } from "@apollo/client";

export const user = gql`
{
  Viewer {
    id
    name
    avatar {
      large
    }
    unreadNotificationCount
    donatorTier
    updatedAt
    options {
      titleLanguage
      displayAdultContent
    }
    mediaListOptions {
      scoreFormat
    }
  }
}`;