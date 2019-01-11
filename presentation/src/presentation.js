// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  Fit,
  Appear
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#e72dac',
    quaternary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

const images = {
  firstFacebookGithubOrganizationExample: require('./images/first_facebook_organization_github_example.png'),
  githubDatabaseSchema: require('./images/github_database_schema.png'),
}

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['fade']} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            GraphQL Workshop using Apollo
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary">
          <Heading size={6} textColor="tertiary" caps>
            About me
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="tertiary">
          <Heading size={6} textColor="tertiary" caps>
            In today's workshop we will work on following things
          </Heading>
          <List textColor="primary">
            <ListItem textSize={30}>A little history and basics of GraphQL</ListItem>
            <ListItem textSize={30}>Benefits of GraphQL over REST</ListItem>
            <ListItem textSize={30}>We'll build a GraphQL server</ListItem>
            <ListItem textSize={30}>And client side to consume the GraphQL API's</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Text size={6} textColor="tertiary">
            History of GraphQL
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="tertiary" caps textAlign="left" textSize={35}>
            Why reinvent the wheel?
          </Heading>
          <Text size={6} textColor="primary" textAlign="left" textSize={35}>
            What were the limitation of REST which Facebook wanted to overcome with GraphQL?
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Text size={6} textColor="tertiary" textAlign="left" textSize={35}>
            Let's understand it with the example of GitHub Organization page
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Fit>
            <Image src={images.firstFacebookGithubOrganizationExample} />
          </Fit>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Fit>
            <Image src={images.githubDatabaseSchema} />
          </Fit>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="tertiary" caps textAlign="left" textSize={35}>
            Problems with REST
          </Heading>
          <List textColor="primary">
            <Appear>
              <ListItem textSize={25}>If we follow REST with strict design principles: Multiple HTTP requests are made</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={25}>If orchestration API are used we end up overfetching data</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={25}>Performance of the system</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={25}>Development cost increases</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={25}>Documentation of schema is needed for frontend devs</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={25}>API versioning</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={25}>API can sometime return unexpected type data</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="tertiary" caps textAlign="left" textSize={35}>
            What is GraphQL?
          </Heading>

          <Text size={6} textColor="primary" textAlign="left" textSize={30}>
            A GraphQL query is a string that is sent to a server to be interpreted and fulfilled, which then returns JSON back to the client.
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="tertiary" caps textAlign="left" textSize={35}>
            Advantages of the GraphQL
          </Heading>

          <List textColor="primary">
            <Appear>
              <ListItem textSize={25}>No overfetching of unwanted data</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={25}>Get many resources data in single request</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={25}>Strongly-typed</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={25}>Declarative</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={25}>Powerful developer tools like GraphiQL and GraphQL Playground</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={25}>API versioning not required</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={25}>GraphQL can be used with programming language</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Text size={6} textColor="tertiary" textSize={35}>
            GraphQL is not only for React projects.
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Text size={6} textColor="tertiary" textSize={35}>
            What is GraphQL schema?
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Text size={6} textColor="tertiary" textSize={35}>
            Apollo client or Relay?
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Text size={6} textColor="tertiary" textSize={35}>
            Okay. Let's build something.
          </Text>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={5} textColor="tertiary" caps textSize={35}>
            Thank You.
          </Heading>

          <Text size={6} textColor="tertiary" textSize={35}>
            Abhay Nikam
          </Text>
          <Text size={6} textColor="primary" textSize={25}>
            twitter: ___abhay
          </Text>
          <Text size={6} textColor="primary" textSize={25}>
            GitHub: abhaynikam
          </Text>
        </Slide>
      </Deck>
    );
  }
}
