import React from 'react'
import styled, { css } from 'styled-components'

function Button ({ className, link, text }) {
  return (
    <div className={className}>
      <a href={link}>{text}</a>
    </div>
  )
}

export default styled(Button)`
  padding: 0;
  border: none;

  a { 
    display: inline-block;
    padding: .5rem 2rem;
    background: ${({ theme }) => theme.secondaryColor};
    font-size:  ${({ theme }) => theme.fontSizeXS};
    font-weight: bold; 
    text-decoration: none; 
    color: ${({ theme }) => theme.primaryColor};
    cursor: pointer;
    transition: .2s;

    :hover {
      transform: skew(-10deg);
    }

    ${props =>
      props.secondary && css`
        background-color: transparent;
        border: 1px solid ${({ theme }) => theme.secondaryColor};
        color: ${({ theme }) => theme.secondaryColor};
      `};
    }
  }
`
