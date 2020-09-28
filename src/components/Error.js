import React from 'react'
import styled from 'styled-components'
import Button from './Button'

function Error ({ className, state, sentry }) {
  return (
    <section className={className}>
      <h1>Oops!</h1>
      <p>This part encountered a problem.</p>
      <Button className='btn' link={window.location} text='Reload' />

      <div className='report' onClick={() => { sentry.showReportDialog({ eventId: state.eventId }) }}>
        <Button className='btn' text='Report feedback' secondary />
      </div>
    </section>
  )
}

export default styled(Error)`
  padding: 1rem;
  margin: 1rem 0;
  background-color: ${({ theme }) => theme.primaryColorDark};

  h1 {
    color: red;
  }

  .report, .btn {
    margin-top: 1rem;
    display: inline-block;
  }

  .btn:last-of-type {
    margin-left: 1rem;
  }
`
