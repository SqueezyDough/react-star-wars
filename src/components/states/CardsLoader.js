import React, { useState, useEffect, useContext } from 'react'
import styled, { css } from 'styled-components'
import { Utils } from '../../modules/index'
import { GhostCard } from '../index'
import ThemeContext from '../../styles/ThemeContext'
import { theme } from '../../styles/theme'

const Fader = styled.div`
  position: absolute;
  width: 100%;
  min-height: 60vh;
  z-index: 1;

  ${({ done }) => done && css`
    animation: setFade .5s forwards;

    ${({ currentTheme }) => currentTheme && css`
      background-image: linear-gradient(0deg, transparent, ${({ currentTheme }) => currentTheme.primaryColor} 75%);
    `};
  `};

  @keyframes setFade {
    from { top: -500px; }
    to { top: -25px; }
  };
`

Fader.displayName = 'Fader'

const SkeletionUI = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 1rem;
  row-gap: 1rem;
  margin-top: 5rem;
  padding: 1rem 0;
  overflow: hidden;

  ${({ done }) => done && css`
    z-index: -1;
    animation: collapse 4s ease-in-out forwards,
                changePerspective 1s ease-in-out forwards;

    .loader {
      position: relative;
      top: 0;
      transform: rotateX(20deg)  translateZ(0);
      transform-origin: 50% 100%;
      animation: crawl 3s ease-in-out forwards;
      animation-delay: 1s;
    }

    @keyframes collapse {
      from { margin-top: 5rem; }
      to { margin-top: -999px; }
    }

    @keyframes changePerspective {
      from { perspective: 10000px; }
      to { perspective: 400px; }
    }

    @keyframes crawl {
      from {
        top: 0;
        transform: rotateX(20deg)  translateZ(0);
      }
      to {
        top: -1000px;
        transform: rotateX(25deg) translateZ(-100px);
      }
    }
  `};
`

SkeletionUI.displayName = 'SkeletonUI'

function Loader ({ className, state }) {
  const [isDone, setIsDone] = useState(false)
  const loadingImageURL = new URL('sw-loading.gif', Utils.getBaseURL())
  const context = useContext(ThemeContext)
  const currentTheme = theme[context]

  // Apply a minumum delay before loading animation finishes
  useEffect(() => {
    let timer
    if (state.start === false) {
      timer = setTimeout(function () {
        setIsDone(true)
      }, 3000)
    } else {
      setIsDone(false)
    }

    return () => { clearTimeout(timer) }
  }, [state])

  return (
    <section className={`${className} ${isDone ? 'done' : ''}`}>
      <Fader currentTheme={currentTheme} done={isDone ? 1 : null} />
      <SkeletionUI done={isDone ? 1 : null}>
        <div className='load-image loader'>
          <img src={loadingImageURL} alt='' />
        </div>

        {
          Array.from({ length: state.loaders }, (_, i) => (
            <GhostCard className='loader' key={i} />
          ))
        }
      </SkeletionUI>
    </section>
  )
}

export default styled(Loader)`
  position: relative;
  overflow: hidden;

  ~ section {
    display: none;
  }

  &.done ~ section {
    display: block;
  }

  .load-image {
    display: block;
    height: 100%;
    overflow: hidden;
    transform: skewX(30deg);
    animation: skew .5s forwards;
    animation-delay: .5s;

    @keyframes skew {
      100% { transform: skewX(0); }
    }

    img {
      display: block;
      object-fit: cover;
      height: 100%;
      position: absolute;
      left: -1000px;
      animation: slide 1s forwards;

      @keyframes slide {
        from { left: -1000px; }
        to { left: 0; }
      }
    }
  }
`
