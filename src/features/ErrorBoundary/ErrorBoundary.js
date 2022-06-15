import React from 'react'
import Error500 from '../../pages/Error500'

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false,
    }
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    // eslint-disable-next-line no-console
    console.log(error, info)
  }

  static getDerivedStateFromError(_error) {
    // Update state so the next render will show the fallback UI.
    return {
      hasError: true,
    }
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <Error500 />
    }

    return this.props.children
  }
}
