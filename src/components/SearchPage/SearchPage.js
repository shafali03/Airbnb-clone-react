import React from 'react'
import './SearchPage.css'
import { Button } from '@material-ui/core'
import SearchResult from '../SearchResult/SearchResult'

function SearchPage() {
  return (
    <div className='searchPage'>
      <div className="searchPage__info">
        <p>62 stays . 20 September to 3 October . 2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">
          Cancellation Flexibility
        </Button>

        <Button variant="outlined">
          Type of place
        </Button>

        <Button variant="outlined">
          Price
        </Button>

        <Button variant="outlined">
          Rooms and beds
        </Button>

        <Button variant="outlined">
          More
        </Button>

      </div>

      <SearchResult
        img="https://res.cloudinary.com/shafali/image/upload/v1599558767/hotel-1330846_640_chjbdy.jpg"
        location="Private room in center of London"
        title="Stay at this spacious Edwardian House"
        description="1 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={4.9}
        price="£45 / night"
        total="£135 total"
      />

      <SearchResult
        img="https://res.cloudinary.com/shafali/image/upload/v1599558767/hotel-1330841_640_dnliyf.jpg"
        location="Private room in center of London"
        title="Independent luxury studio apartment"
        description="2 guest · 3 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen"
        star={4.3}
        price="£40 / night"
        total="£157 total"
      />

      <SearchResult
        img="https://res.cloudinary.com/shafali/image/upload/v1599558767/apartment-1822409_640_jpub80.jpg"
        location="Private room in center of London"
        title="London Studio Apartments"
        description="4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine"
        star={3.8}
        price="£35 / night"
        total="£207 total"
      />

      <SearchResult
        img="https://res.cloudinary.com/shafali/image/upload/v1599558767/hotel-601327_640_cktapp.jpg"
        location="Private room in center of London"
        title="30 mins to Oxford Street, Excel London"
        description="1 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={4.3}
        price="£70 / night"
        total="£420 total"
      />

      <SearchResult
        img="https://res.cloudinary.com/shafali/image/upload/v1599558767/bed-5054985_640_tuwglq.jpg"
        title="Spacious Peaceful Modern Bedroom"
        description="3 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Free parking · Dry Cleaning"
        star={5.0}
        price="£60 / night"
        total="£450 total"
      />

      <SearchResult
        img="https://res.cloudinary.com/shafali/image/upload/v1599558767/room-2269591_640_lk8ym4.jpg"
        location="Private room in center of London"
        title="5 Star Luxury Apartment"
        description="3 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={4.5}
        price="£150 / night"
        total="£900 total"
      />

      <SearchResult
        img="https://res.cloudinary.com/shafali/image/upload/v1599558768/room-4768554_640_nherkn.jpg"
        location="Private room in center of London"
        title="The Blue Room In London"
        description="2 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Washing Machine"
        star={4.9}
        price="£120 / night"
        total="£700 total"
      />
    </div>
  )
}

export default SearchPage
