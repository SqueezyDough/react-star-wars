import React from 'react'
import styled from 'styled-components'

function ContentLoader ({ className, item, index }) {
  return (
    <section className={className}>
      <div
        className={`projectile -${item.color}`}
        y={item.y}
        direction={item.direction}
        delay={item.delay}
        key={index}
      />
    </section>
  )
}

export default styled(ContentLoader)` 

`
