import { gql } from "@apollo/client";

export const userId = gql`
query ($id: Int!, $name: String) {
  User (id: $id, name: $name) {
    id
    name
    about # (asHtml: true)
    donatorTier
    isFollowing
    avatar {
      large
      medium
    }
    banner
    unreadNotificationCount
    options {
      titleLanguage
      displayAdultContent
    }
    mediaListOptions {
     	scoreFormat
    }
    updatedAt
  }
}`;