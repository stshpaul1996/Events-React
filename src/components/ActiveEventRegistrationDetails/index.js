// Write your code here
import './index.css'

const reqistrationStatus = {
  yetToReqister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {activeRegistrationStatus} = props

  const renderNoActiveEventView = () => (
    <p className="not-active-event">
      Click on an event, to view its registration details
    </p>
  )

  const renderRegistrationClosedView = () => (
    <div className="view">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="image"
      />
      <h1 className="closed-heading">Registrations Are Closed Now!</h1>
      <p className="description">
        Stay tuned. We will reopen the registration soon!
      </p>
    </div>
  )

  const renderRegisteredView = () => (
    <div className="view">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="image-registered"
      />
      <h1 className="registered-heading">
        You have already registered for the event
      </h1>
    </div>
  )

  const renderYetToRegisterView = () => (
    <div className="view">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="image"
      />
      <p className="description">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="register-button">
        Register Here
      </button>
    </div>
  )

  const renderActiveEvent = () => {
    switch (activeRegistrationStatus) {
      case reqistrationStatus.yetToReqister:
        return renderYetToRegisterView()
      case reqistrationStatus.registered:
        return renderRegisteredView()
      case reqistrationStatus.registrationClosed:
        return renderRegistrationClosedView()
      default:
        return renderNoActiveEventView()
    }
  }

  return <div className="container">{renderActiveEvent()}</div>
}

export default ActiveEventRegistrationDetails
