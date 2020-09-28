import React, { Component } from 'react'
import Error from './components/Error'
import * as Sentry from '@sentry/react'

class ErrorBoundary extends Component {
  constructor (props) {
    super(props)
    this.state = {
      error: '',
      eventId: '',
      errorInfo: '',
      hasError: false
    }
  }

  static getDerivedStateFromError (error) {
    return { hasError: true, error }
  }

  componentDidCatch (error, errorInfo) {
    Sentry.withScope((scope) => {
      scope.setExtras(errorInfo)
      const eventId = Sentry.captureException(error)
      this.setState({ eventId, errorInfo })
    })
  }

  render () {
    const { hasError } = this.state

    return hasError
      ? <Error state={this.state} sentry={Sentry} />
      : this.props.children
  }
}

export default ErrorBoundary
