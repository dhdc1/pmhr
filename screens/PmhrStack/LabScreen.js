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
import axios from "axios";

import { connect } from "react-redux";
//import { FETCH_LAB } from "../../actions/Actions";

class LabScreen extends React.Component {
  state = {
    cid: "1421200056153",
    lab: []
  };
  async componentDidMount() {
    //this.props.dispatch(FETCH_LAB("1421200056153"));
    let resp = await axios.post("http://61.19.22.99:3002/lab", {
      cid: this.state.cid
    });
    this.setState({ lab: resp.data.lab });
    console.log(resp.data.lab);
  }
  render() {
    //console.log(this.props.globalState.lab.lab[0])
    return (
      <Container>
        <View style={{backgroundColor: "gray" }}>
          <ListItem itemDivider>
            <Text style={{ fontWeight: "bold" }}>({this.state.cid})</Text>
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
        </View>
        <Content>
          <List>
            {this.state.lab.map((data, index) => (
              <ListItem key={index}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between"
                  }}
                >
                  <Text>{data.labname}</Text>
                  <Text>{data.basevalue}</Text>
                  <Text>{data.labresult}</Text>
                  <Text>{data.labdate}</Text>
                </View>
              </ListItem>
            ))}
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
