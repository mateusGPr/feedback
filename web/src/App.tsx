import { ApolloProvider } from '@apollo/client'
import { Anilist } from './components/Anilist'
import AnilistClient from './components/Anilist/service'
import { Widget } from './components/WidgetFeedback'

export function App() {
  return (<>
    <ApolloProvider client={AnilistClient}>
      <Anilist />
    </ApolloProvider>
    <Widget />
  </>)
}

