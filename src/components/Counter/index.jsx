import './style.scss'
import PropTypes from 'prop-types'

function Counter({ name, value, picture, units }) {
  return (
    <article className="counter">
      <div className="bloc-logo">
        <img src={picture} alt={name} />
      </div>
      <div className="bloc-text">
        <p className="bloc-text__value">
          {value}
          {units}
        </p>
        <p className="bloc-text__title">{name}</p>
      </div>
    </article>
  )
}

Counter.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  picture: PropTypes.string.isRequired,
  units: PropTypes.string.isRequired,
}

export default Counter
