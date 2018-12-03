import React from "react";
import { View } from "react-native";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Text,
  Icon,
  Left,
  Body,
  Right
} from "native-base";
import {} from "expo";

import { connect } from "react-redux";

class LabScreen extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem itemDivider>
              <Text>
                ({this.props.globalState.cid}) {this.props.globalState.name}{" "}
                {this.props.globalState.lname}
              </Text>
            </ListItem>
            <ListItem itemDivider>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <Text>LAB</Text>
                <Text>ค่ามาตรฐาน</Text>
                <Text>ผลตรวจ</Text>
                <Text>วดป.</Text>
              </View>
            </ListItem>
            <ListItem>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <Text>BUN</Text>
                <Text>20</Text>
                <Text>10</Text>
                <Text>30/11/61</Text>
              </View>
            </ListItem>
            <ListItem>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <Text>Cho</Text>
                <Text>20</Text>
                <Text>10</Text>
                <Text>05/10/61</Text>
              </View>
            </ListItem>
            <ListItem>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <Text>Cr</Text>
                <Text>20</Text>
                <Text>10</Text>
                <Text>30/11/61</Text>
              </View>
            </ListItem>
            <ListItem>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <Text>HbA1c</Text>
                <Text>{"<=7"}</Text>
                <Text>{"5.6"}</Text>
                <Text>21/11/61</Text>
              </View>
            </ListItem>
            <ListItem>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <Text>HbA1c</Text>
                <Text>{"<=7"}</Text>
                <Text>{"5.6"}</Text>
                <Text>21/11/61</Text>
              </View>
            </ListItem>
            <ListItem>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <Text>HbA1c</Text>
                <Text>{"<=7"}</Text>
                <Text>{"5.6"}</Text>
                <Text>21/11/61</Text>
              </View>
            </ListItem>
            <ListItem>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <Text>HbA1c</Text>
                <Text>{"<=7"}</Text>
                <Text>{"5.6"}</Text>
                <Text>21/11/61</Text>
              </View>
            </ListItem>
            <ListItem>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <Text>HbA1c</Text>
                <Text>{"<=7"}</Text>
                <Text>{"5.6"}</Text>
                <Text>21/11/61</Text>
              </View>
            </ListItem>
            <ListItem>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <Text>HbA1c</Text>
                <Text>{"<=7"}</Text>
                <Text>{"5.6"}</Text>
                <Text>21/11/61</Text>
              </View>
            </ListItem>
            <ListItem>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <Text>HbA1c</Text>
                <Text>{"<=7"}</Text>
                <Text>{"5.6"}</Text>
                <Text>21/11/61</Text>
              </View>
            </ListItem>
            <ListItem>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <Text>HbA1c</Text>
                <Text>{"<=7"}</Text>
                <Text>{"5.6"}</Text>
                <Text>21/11/61</Text>
              </View>
            </ListItem>
            <ListItem>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <Text>HbA1c</Text>
                <Text>{"<=7"}</Text>
                <Text>{"5.6"}</Text>
                <Text>21/11/61</Text>
              </View>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({ globalState: state });
const mapDispatchToProps = dispatch => ({ dispatch });
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LabScreen);
