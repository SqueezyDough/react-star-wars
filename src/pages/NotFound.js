import React from 'react'
import Header from '../components/Header'
import Button from '../components/Button'

export default function NotFound () {
  return (
    <>
      <Header small />
      <h1>This page does not exist in our observable universe.</h1>
      <Button link='/' text='Home' />
    </>
  )
}
