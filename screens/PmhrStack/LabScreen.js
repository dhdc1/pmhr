import React from "react";
import { View, ActivityIndicator } from "react-native";
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
import { AppLoading } from "expo";
import axios from "axios";

import { connect } from "react-redux";
//import { FETCH_LAB } from "../../actions/Actions";

class LabScreen extends React.Component {
  state = {
    cid: this.props.globalState.lab.cid
  };
  async componentDidMount() {
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
        <View style={{ backgroundColor: "gray" }}>
         
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
          {!this.state.lab ? (
            <ActivityIndicator />
          ) : (
            <List>
              {this.state.lab.map((data, index) => (
                <ListItem key={index}>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      justifyContent: "space-around"
                    }}
                  >
                    <Text style={{fontSize:12}}>{data.labname}</Text>
                    <Text style={{fontSize:12}}>{data.basevalue}</Text>
                    <Text style={{fontSize:12}}>{data.labresult}</Text>
                    <Text style={{fontSize:12}}>{data.labdate}</Text>
                  </View>
                </ListItem>
              ))}
            </List>
          )}
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
