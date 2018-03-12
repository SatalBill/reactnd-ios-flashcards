import { connect } from "react-redux"
import AppWithNavigationState from "../../components/AppWithNavigationState"

const mapStateToProps = state => ({
  nav: state.nav,
})

export default connect(mapStateToProps)(AppWithNavigationState)

