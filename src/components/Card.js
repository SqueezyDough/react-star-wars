import React from 'react'
import { Utils } from '../modules/index'
import styled from 'styled-components'

function Card ({ className, character, useInitials }) {
  const name = character.name || character.title
  const characterURL = Utils.getCharacterURL(character.url)

  // take the first character or the initials
  const shortName = useInitials ? Utils.getInitials(name) : Utils.getFirstCharacter(name)

  return (
    <a href={characterURL} className={className}>
      <article className='card'>
        <span className='card__short-title'>{shortName}</span>
        <h1 className='card__title'>{name}</h1>
      </article>
    </a>
  )
}

export default styled(Card)` 
  background-color: ${({ theme }) => theme.primaryColorLight};
  transition: background ${({ theme }) => theme.transition};
  text-align: center;

  &:hover {
    background-color: ${({ theme }) => theme.primaryColorDark};
  }

  .card {
    padding: 10%;
  }

  .card__short-title {
    font-family: ${({ theme }) => theme.fontTitles}
    font-size: ${({ theme }) => theme.fontSizeXXL};
    font-weight: bold;
  }
`
