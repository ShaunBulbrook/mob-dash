import { render } from '@testing-library/react'
import Index from '../pages'

describe('Index', () => {
  const pageHeadingText = 'Welcome to Next.js'
  it(`should render "${pageHeadingText}" in the page heading`, () => {
    expect(render(<Index />).getByTestId('index-page-heading')).toHaveTextContent(pageHeadingText)
  })
})
