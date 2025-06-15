import React from 'react'
import Navbar from '../Components/Navbar'
import TourCard from '../Components/TourCard'
import card1 from '../assets/card1.png'
import card2 from '../assets/card2.png'
import card3 from '../assets/card3.png'
import card4 from '../assets/card4.png'
import card5 from '../assets/card5.png'
import card6 from '../assets/card6.png'
function MyTours() {
    return (
        <>
            <Navbar />
            <div className='flex mx-auto gap-y-8 flex-wrap justify-center items-center'>
                <TourCard
                    id='1'
                    image={card1}
                    heading='Parez Art Museum Miami'
                    para='The Parez Art Museum Miami --officially known as the Jorge M.Parez Art Museum...'
                    money='$50-$200'
                    day='3 Day'
                    showActions={true}

                />
                <TourCard
                    image={card2}
                    heading='Hard Rock Stadium'
                    para='Hard Rock Stadium is a multipurpose stadium located in Miami Gardens,Florida a city...'
                    money='$50-$80'
                    day='1 Day'
                    showActions={true}
                />
                <TourCard
                    image={card3}
                    heading='Matheson Hammock Park'
                    para='Matheson Hammock Park is a 630 acres urban park in a metropolitan Miami at 9610 old'
                    money='$50-$200'
                    day='3 Day'
                    showActions={true}
                />
                <TourCard
                    image={card4}
                    heading='The Wharf Miami'
                    para='An all new waterfront dining and entertainment district in Miami, Florida, The Wharf Miami...'
                    money='$50-$200'
                    day='3 Day'
                    showActions={true}
                />
                <TourCard
                    image={card5}
                    heading='Miami Tower'
                    para='The Miami Tower is a 47-story skyscraper in downtown Miami, Florida, United States...'
                    money='$50-$200'
                    day='3 Day'
                    showActions={true}
                />
                <TourCard
                    image={card6}
                    heading='Skyviews Miami'
                    para='Views of Biscayne Boy , Miami Beach, and the Miami skyline from the 40th floor...'
                    money='$50-$200'
                    day='3 Day'
                    showActions={true}
                />
            </div>
        </>
    )
}

export default MyTours
