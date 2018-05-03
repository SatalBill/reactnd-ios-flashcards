import React, { Component } from "react"
import PropTypes from "prop-types"
import { View, Animated, Text } from "react-native"
import Svg, { G, Circle } from "react-native-svg"
import { Button } from "react-native-elements"
import Modal from "react-native-modal"
import { connect } from "react-redux"

import { clearQuiz, startQuiz, openDeckDetail } from "../../actions"
import { getGradeMessage } from "./GradMessage"

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
    const {rotate, animatedStroke, circumference, halfsize, radius, strokeWidth} = this.state
    const {size, scoreStatus, score} = this.props
    const gradeMessage = getGradeMessage(score.percent)

    const _isAnimated = typeof(animatedStroke) === "number"
      ? true
      : false
    return (
      <Modal
        animationIn={"fadeIn"}
        animationOut={"fadeOut"}
        isVisible={this.state.modalVisible}
        animationInTiming={1000}
        animationOutTiming={1000}
      >

        <View style={styles.modal}>
          <View style={styles.container}>
            <Text style={{fontWeight: "700", fontSize: 28}}>
              {`${gradeMessage.toUpperCase()}!`}
            </Text>
            <View style={styles.content}>
              <View style={styles.label}>
                <Text style={{fontWeight: "700", fontSize: 18}}>
                  Your score is
                </Text>
                <Text style={{fontWeight: "800", fontSize: 30}}>
                  {`${score.percent}%`}
                </Text>
                <Text style={{fontWeight: "700", fontSize: 18}}>
                  {scoreStatus}
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
                          strokeWidth={10}
                  />
                  <AnimatedCircle r={radius}
                                  cx={halfsize}
                                  cy={halfsize}
                                  fill="transparent"
                                  stroke={_isAnimated
                                    ? "#009688"
                                    : "#DAE2E5"}
                                  strokeWidth={10}
                                  strokeDasharray={[animatedStroke, circumference]}
                                  transform={rotate}
                  />
                </G>
              </Svg>
            </View>
            <View style={styles.buttonContainer}>
              <Button
                title="RETRY"
                style={styles.button}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible)
                }}
              />
              <Button
                title="GO TO DECK"
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible)
                  this.props.openDeckDetail()
                }}
              />

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
    openDeckDetail: () => {
      dispatch(openDeckDetail())
    },

    clearQuiz: () => {
      dispatch(clearQuiz())
    },

    startQuiz: ({_isShow, total}) => {
      dispatch(startQuiz({_isShow, total}))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DonutChart)

