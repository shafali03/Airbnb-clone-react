import React from 'react'
import './Home.css'
import Banner from '../Banner/Banner'
import Card from '../Card/Card'


function Home() {
  return (
    <div className="home">
      <Banner />

      <div className="home__section">
        <Card
          src="https://res.cloudinary.com/shafali/image/upload/v1599476471/log-house-96085_640_s3vv5b.jpg"
          title="Entire homes"
          description="Comfortable private places, with rooms for friends or family"
        />
        <Card
          src="https://res.cloudinary.com/shafali/image/upload/v1599475405/home-1680800_640_spgkyy.jpg"
          title="Unique stay"
          description="A unique experience with modern looks"
        />
        <Card
          src="https://res.cloudinary.com/shafali/image/upload/v1599475329/living-room-2732939_640_rhffza.jpg"
          title="Online Experiences"
          description="Unique styles of space around the house"
        />
      </div>

      <div className="home__section">
        <Card
          src="https://res.cloudinary.com/shafali/image/upload/v1599476063/elegant-1498631_640_db6w9n.jpg"
          title="3 Bedroom Flats London"
          description="Enjoy the amazing view of Kielder Forest nearby"
          price="£250/night"
        />
        <Card
          src="https://res.cloudinary.com/shafali/image/upload/v1599475009/architecture-1836070_640_brirfm.jpg"
          title="Full house with 3 rooms private estate"
          description="Enjoy the shopping experience with shops and restaurants nearby"
          price="£170/night"
        />
        <Card
          src="https://res.cloudinary.com/shafali/image/upload/v1599475078/furniture-998265_640_d7nen8.jpg"
          title="Penthouse in London"
          description="Enjoy the amazing sights of London with this stunning penthouse"
          price="£350/night"
        />
      </div>
    </div>
  )
}

export default Home
