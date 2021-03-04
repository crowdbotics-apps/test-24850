import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
import { widthPercentageToDP as wp } from "react-native-responsive-screen"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = { DateTimePicker_5: new Date(""), TextInput_7: "" }
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  render = () => (
    <ImageBackground style={styles.ImageBackground_1}>
      <Icon name="folder-open" />
      <DateTimePicker
        showIcon={false}
        date={this.state.DateTimePicker_5}
        onDateChange={selectedDate =>
          this.setState({ DateTimePicker_5: selectedDate })
        }
      />
      <TextInput
        placeholder="Sample text input placeholder"
        value={this.state.TextInput_7}
        onChangeText={nextValue => this.setState({ TextInput_7: nextValue })}
      />
      <TouchableOpacity onPress={() => this.props.navigation.navigate("")}>
        <Text style={styles.Text_13}>Welcome!</Text>
      </TouchableOpacity>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  ImageBackground_1: { alignSelf: "center", backgroundSize: "stretch" },
  Icon_3: {},
  DateTimePicker_5: {},
  TextInput_7: {},
  Text_13: { fontSize: 21, color: "#0957aa" }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
