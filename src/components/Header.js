import React from 'react'
import styled, { css } from 'styled-components'

function Header ({ className, light }) {
  return (
    <a className={className} href='/'>
      <span>Star Wars</span>
      <span>Universe</span>
    </a>
  )
}

export default styled(Header)`
  display: block;
  margin: 0;
  padding: 3rem 0;
  font-family: ${({ theme }) => theme.fontTitles};
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizeXXL};
  line-height: 7rem;
  user-select: none;

  span:last-of-type {
    display: block;

    &::after {
      content: '.';
    }
  }

  ${props =>
    props.small && css`
      font-size: ${({ theme }) => theme.fontSizeM};
      line-height: 3.5rem;
    `};
  }

  ${props =>
    props.light && css`
      color: ${({ theme }) => theme.primaryColor};
    `};
  }
`
