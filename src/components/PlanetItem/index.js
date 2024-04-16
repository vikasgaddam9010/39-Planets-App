import './index.css'

const PlanetItem = props => {
  const {name, imageUrl, description} = props.eachPlanet
  return (
    <div className="container">
      <img alt={`planet ${name}`} src={imageUrl} />
      <h1 className="color-f8fafc">{name}</h1>
      <p className="color-f1f5f9">{description}</p>
    </div>
  )
}
export default PlanetItem
