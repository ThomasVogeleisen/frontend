import './style.scss'

function Counter({ name, value, picture, units }) {
  return (
    <div className="counter">
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
    </div>
  )
}

export default Counter
