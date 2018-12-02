import React from "react";
import { WebView } from "react-native";
import { Container, Content, Text, View } from "native-base";
import { connect } from "react-redux";

class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <Content style={{ padding: 15 }}>
          <Text>
            {this.props.globalState.name}
            {this.props.globalState.lname}
          </Text>
        </Content>
      </Container>
    );
  }
}

mapStateToProps = state => ({ globalState: state });

export default connect(mapStateToProps)(HomeScreen);
