// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, setActiveId, isActive} = props
  const {imageUrl, name, location, id} = eventDetails
  const eventImgClassName = isActive ? 'list-image active' : 'list-image'

  const onClickEvent = () => {
    setActiveId(id)
  }

  return (
    <li className="list-container">
      <button type="button" className="list-btn" onClick={onClickEvent}>
        <img src={imageUrl} alt="event" className={eventImgClassName} />
      </button>

      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
