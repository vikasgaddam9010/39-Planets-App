import PlanetItem from '../PlanetItem'

import Slider from 'react-slick'

import './index.css'

const PlanetsSlider = porps => {
  const {planetsList} = porps

  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div  className="slider-container">
      <h1 className="h1-planet">PLANETS</h1>
      <Slider testid="planets" {...settings}>
        {planetsList.map(eachPlanet => (
          <div className="d-flex">
            <PlanetItem key={eachPlanet.id} eachPlanet={eachPlanet} />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
