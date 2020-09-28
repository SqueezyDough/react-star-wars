import React from 'react'
import styled, { css } from 'styled-components'
import { Header } from '../'
import { Utils } from '../../modules'
const Projectile = styled.div`
  position: absolute;
  top: ${({ y }) => y}%;
  left: -200px;
  width: 30px;
  height: 6px;
  background: #FFF;
  border-radius: 10px;
  z-index: -1;
  animation: fire-projectile infinite ease-in;
  animation-duration: ${({ duration }) => duration}s;
  animation-direction: ${({ direction }) => direction};
  animation-delay: ${({ delay }) => delay}s;

  &.-red {
    box-shadow: 10px 0 25px #b62321, inset 0px 0 10px #b62321;
  }

  &.-green {
    box-shadow: 10px 0 25px #4aa942, inset 0px 0 10px #4aa942;
  }

  &.-blue {
    box-shadow: 10px 0 25px #5f9fdd, inset 0px 0 10px #5f9fdd;
  }

  @keyframes fire-projectile {
    0% {
      width: 10px;
      left: -200px;
    }

    100% {
      width: 300px;
      left: calc(100% + 200px);
    }
  }
}
`

Projectile.displayName = 'Projectile'

function ContentLoader ({ className }) {
  const config = {
    amount: Utils.getRandomValue(8, 12),
    minY: 0,
    maxY: 100,
    colors: ['red', 'green', 'blue'],
    directions: ['normal', 'reverse']
  }

  const projectiles = Array.from({ length: config.amount }, _ => (
    {
      y: Utils.getRandomValue(config.minY, config.maxY, true),
      delay: Utils.getRandomValue(0, 3),
      duration: Utils.getRandomValue(0.5, 3),
      color: Utils.getRandomValueFromArray(config.colors),
      direction: Utils.getRandomValueFromArray(config.directions)
    }
  ))

  return (
    <section className={className}>
      <div className='content-wrapper'>
        <Header small light />
      </div>
      {
        projectiles.map((item, index) => (
          <Projectile
            className={`-${item.color}`}
            y={item.y}
            direction={item.direction}
            duration={item.duration}
            delay={item.delay}
            key={index}
          />
        ))
      }
    </section>
  )
}

export default styled(ContentLoader)` 
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 3rem 0;
  overflow-x: hidden;
  z-index: 1;
  pointer-events: none;
  background-color: ${({ theme }) => theme.secondaryColor};
  animation: pulse-bg 1s infinite alternate;

  ${({ done }) => done && css`
    opacity: 1;
    animation: dissolve .3s forwards;
  `};

  @keyframes pulse-bg {
    0% {
      background-color: #171b22;
    }
    100% {
      background-color: #29303a;
    }
  }
  
  @keyframes dissolve {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }  
`
