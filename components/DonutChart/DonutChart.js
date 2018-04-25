import React, { Component } from "react"
import Svg, {
  Circle,
  TSpan,
  Text,
} from "react-native-svg"

import { View, TouchableOpacity, Animated } from "react-native"

import PropTypes from "prop-types"

const AnimatedCircle = Animated.createAnimatedComponent(Circle)

export default class DonutChart extends Component {
  constructor (props) {
    super(props)
    this.state = {
      valuelabel: "Completed",
      size: 180,
      strokewidth: 26,
      stroke: new Animated.Value(0),
      circumference: new Animated.Value(0),

    }
    this.animatedValue = new Animated.Value(0)

  }

  componentDidMount () {
    this.handleAnimation()

  }

  handleAnimation () {
    const {size, strokewidth} = this.state
    const {percentage} = this.props

    const halfsize = (size * 0.5)
    const radius = halfsize - (strokewidth * 0.5)
    const circumference = 2 * Math.PI * radius
    const strokeval = ((percentage * circumference) / 100)

    this.state.stroke.addListener(stroke => {
      this.setState({stroke: stroke.value})
    })

    Animated.timing(
      this.state.stroke, {
        toValue: strokeval,
        duration: 1000
      }
    ).start()
  }

  render () {
    const {size, strokewidth,} = this.state
    const {percentage} = this.props

    const halfsize = (size * 0.5)
    const radius = halfsize - (strokewidth * 0.5)
    const circumference = 2 * Math.PI * radius
    const strokeval = ((percentage * circumference) / 100)
    // const dashval = [strokeval, circumference]
    const rotateval = "rotate(-90 " + halfsize + "," + halfsize + ")"

    console.log(strokeDasharray)

    const strokevalNew = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, strokeval]
    })

    const circumferenceNew = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [strokeval, circumference]
    })
    let strokeDasharray = [strokevalNew, circumferenceNew]
    let strokeTest = [this.state.stroke, circumference]

    // const circumferencelNew = this.animatedValue.interpolate({
    //   inputRange: [0, 1],
    //   outputRange: [0, circumference]
    // })

    return (
      <View>
        <Svg
          height="300"
          width="300"
        >
          <Circle r={radius} cx={halfsize} cy={halfsize}
            // transform={rotateval}
                  fill="transparent"
                  stroke="#DAE2E5"
                  strokeWidth={26}
          />
          <AnimatedCircle r={radius}
                          cx={halfsize}
                          cy={halfsize}
                          fill="transparent"
                          stroke="#009688"
                          strokeWidth={26}
            // ref={ref => (this._circle = ref)}

            // ref={ ref => this._myCircle = ref }
                          strokeDasharray={strokeTest}
            // transition={"strokeDasharray .3s ease"}
                          transform={rotateval}
          />

        </Svg>

      </View>
    )
  }
}

DonutChart.propTypes = {
  // value: PropTypes.number,        // value the chart should show
  // valuelabel: PropTypes.string,   // label for the chart
  // size: PropTypes.number,         // diameter of chart
  // strokewidth: PropTypes.number   // width of chart line
}



