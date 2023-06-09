import React from 'react'
import './portfolio.css'
import IMG1 from './../../assets/portfolio1.png'
import IMG2 from './../../assets/portfolio2.png'
import IMG3 from './../../assets/portfolio3.png'
import IMG4 from './../../assets/portfolio4.png'

const data = [
  {
    id:1,
    image: IMG1,
    title: 'Twitter-Clone',
    github: 'https://github.com/Akashx1550/Twitter-Clone',
    demo: 'https://akashx1550.github.io/Twitter-Clone/',
  },

  {
    id:2,
    image: IMG2,
    title: 'FitSport',
    github: 'https://github.com/Akashx1550/FitSport',
    demo: 'https://github.com/Akashx1550/FitSport',
  },

  {
    id:3,
    image: IMG3,
    title: 'Blackjack Mini Game',
    github: 'https://github.com/Akashx1550/BlackJack-Game',
    demo: 'https://akashx1550.github.io/BlackJack-Game/',
  },

  {
    id:4,
    image: IMG4,
    title: 'Live COVID Tracker',
    github: 'https://github.com/Akashx1550/COVID-19-Live-Tracker',
    demo: 'https://akashx1550.github.io/COVID-19-Live-Tracker/',
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h4>My Recent Work</h4>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id,image,title,github,demo})=>{
            return(
              <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className='portfolio__item-cta'>
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
        </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio