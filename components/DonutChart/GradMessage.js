export const getGradeMessage = (percentage) => {
  const message = {
    perfect: "perfect",
    excellent: "excellent",
    good: "good",
    fair: "fair",
    poor: "poor",
    bad: "bad"
  }

  let result = ""
  switch (true) {
    case percentage > 80 && percentage <= 100: {
      result = message.perfect
      break
    }
    case percentage > 60 && percentage <= 80 : {
      result = message.excellent
      break
    }

    case percentage > 40 && percentage <= 60: {
      result = message.good
      break
    }

    case percentage > 20 && percentage <= 40: {
      result = message.fair
      break
    }

    case percentage > 0 && percentage <= 20: {
      result = message.poor
      break
    }

    case percentage == 0: {
      result = message.bad
      break
    }

    default:
      return
  }
  return result
}
