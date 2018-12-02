import React from 'react';
import { WebView } from 'react-native';
import { Container, Content, Text, View } from 'native-base';


export default class extends React.Component {
  
  render() {
    return (
      <Container>
        <Content style={{ padding: 15 }}>
          <Text>Home</Text>
        </Content>
      </Container>
    );
  }
}
