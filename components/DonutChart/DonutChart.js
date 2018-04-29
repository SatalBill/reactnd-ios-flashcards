import React, { Component } from "react"
import { View, TouchableHighlight, Animated, Text, Modal } from "react-native"
import Svg, { G, Circle } from "react-native-svg"
import { Button } from "react-native-elements"

import { connect } from "react-redux"
import { clearQuiz, startQuiz, getRightAnswer, getWrongAnswer, goToBack } from "../../actions"
import { getGradeMessage } from "./GradMessage"

import PropTypes from "prop-types"
import styles from "./styles"

const AnimatedCircle = Animated.createAnimatedComponent(Circle)

class DonutChart extends Component {
  state = {
    valuelabel: "Completed",
    size: 200,
    strokeWidth: 10,
    animatedStroke: new Animated.Value(0),
    stroke: 0,
    circumference: 0,
    modalVisible: false
  }

  componentDidMount () {
    this.setState({modalVisible: true})
    this.getStrokeValue()
  }

  restartQuiz () {
    this.props.clearQuiz()
    const quizNum = this.props.questions.length
    return this.props.startQuiz({_isShow: true, total: quizNum})
  }

  setModalVisible (visible) {
    this.setState({modalVisible: visible},
      this.restartQuiz()
    )
  }

  getStrokeValue () {
    const {size, strokeWidth} = this.state
    const {percent} = this.props.score
    const halfsize = (size * 0.5)
    const radius = halfsize - (strokeWidth * 0.5)
    const circumference = 2 * Math.PI * radius
    const stroke = ((percent * circumference) / 100)
    // `${quiz.score}/${quiz.total}`

    const rotate = `rotate(-90 ${halfsize}, ${halfsize})`

    this.setState({
        circumference,
        radius,
        halfsize,
        rotate,
        stroke
      }, () => {
        this.handleAnimation()
      }
    )
  }

  handleAnimation () {
    const stroke = this.state.stroke
    this.state.animatedStroke.addListener(animatedStroke => {
      this.setState({animatedStroke: animatedStroke.value})
    })
    Animated.timing(
      this.state.animatedStroke, {
        toValue: stroke,
        duration: 900
      }
    ).start()
  }

  render () {
    const {_isMounted, rotate, animatedStroke, circumference, halfsize, radius, strokeWidth} = this.state
    const {size, scoreStatus, score} = this.props
    console.log(score)
    const gradeMessage = getGradeMessage(score.percent)

    let strokeDasharray = `${animatedStroke}, ${circumference}`
    const _isAnimated = typeof(animatedStroke) === "number"
      ? true
      : false
    return (
      <Modal animationType={"fade"}
             transparent={true}
             visible={this.state.modalVisible}
             onRequestClose={() => {
               // console.log(this.props.clearQuiz)
             }}>


        <View style={styles.modal}>
          <View style={styles.container}>

            <View style={styles.content}>

              <View style={styles.label}>
                <Text style={{fontWeight: "700", fontSize: 18, color: "red"}}>
                  {scoreStatus}
                </Text>
                <Text style={{fontWeight: "700", fontSize: 18, color: "red"}}>
                  {gradeMessage.toUpperCase()}
                </Text>

              </View>


              <Svg
                style={styles.chart}
                width={`${size}`}
                height={`${size}`}

              >
                <G>
                  <Circle r={radius}
                          cx={halfsize}
                          cy={halfsize}
                          transform={rotate}
                          fill="transparent"
                          stroke="#DAE2E5"
                          strokeWidth={strokeWidth}
                  />
                  <AnimatedCircle r={radius}
                                  cx={halfsize}
                                  cy={halfsize}
                                  fill="transparent"
                                  stroke={_isAnimated
                                    ? "#009688"
                                    : "#DAE2E5"}
                                  strokeWidth={strokeWidth}
                                  strokeDasharray={strokeDasharray}
                                  transform={rotate}
                  />
                </G>
              </Svg>
            </View>
            <View style={styles.buttonContainer}>

              <Button
                title="RETRY?"
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible)
                }}
              >
              </Button>
            </View>
          </View>
        </View>
      </Modal>
    )
  }
}

DonutChart.propTypes = {
  // value: PropTypes.number,        // value the chart should show
  // valuelabel: PropTypes.string,   // label for the chart
  // size: PropTypes.number,         // diameter of chart
  // strokeWidth: PropTypes.number   // width of chart line
}

const mapStateToProps = state => {
  return {
    title: state.decks.currentDeck.title,
    questions: state.decks.currentDeck.questions,
    score: state.quiz.score,
    total: state.quiz.total,
    currentIndex: state.quiz.currentIndex,
    _isShow: state.quiz._isShow,
    _isFinish: state.quiz._isFinish

  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    clearQuiz: () => {
      dispatch(clearQuiz())
    },

    startQuiz: ({_isShow, total}) => {
      dispatch(startQuiz({_isShow, total}))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DonutChart)

