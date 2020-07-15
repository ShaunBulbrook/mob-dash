import { act, fireEvent, render } from '@testing-library/react'
import Index from '../pages'
jest.useFakeTimers()
describe('Index', () => {
  it('should render a timer block', () => {
    expect(render(<Index />).getByTestId('timer-heading')).toHaveTextContent('Mob timer')
  })
  it('should render the start time of ten minutes', () => {
    expect(render(<Index />).getByTestId('time-remaining')).toHaveTextContent('10:00')
  })
  it('should render a start button', () => {
    const startButton = render(<Index />).getByTestId('start-button')
    expect(startButton).toHaveTextContent('Start')
  })
  it('should countdown when the start button is pressed', () => {
    const index = render(<Index />)
    fireEvent.click(index.getByTestId('start-button'))
    expect(index.getByTestId('time-remaining')).toHaveTextContent('9:59')
  })
  it('should countdown', () => {
    const index = render(<Index />)
    act(() => {
      fireEvent.click(index.getByTestId('start-button'))

      jest.advanceTimersByTime(5000)
    }
    )
    // wait 5 seconds
    expect(index.getByTestId('time-remaining')).toHaveTextContent('9:54')
  })
  it('shouldnt countdown until the button is pressed', () => {
    const index = render(<Index />)
    act(() => {
      jest.advanceTimersByTime(5000)
    })
    expect(index.getByTestId('time-remaining')).toHaveTextContent('10:00')
  })
  it('should stop the timer if it hits 0', () => {
    const index = render(<Index />)
    act(() => {
      fireEvent.click(index.getByTestId('start-button'))
      jest.advanceTimersByTime(620000)
    })
    expect(index.getByTestId('time-remaining')).toHaveTextContent('0:00')
  })
  it.skip('Should turn the page red if the timer hits 0', () => {
    const index = render(<Index />)
    console.log(index.getByTestId('timer-heading'))
    expect(index.getByTestId('timer-heading').style)
  })
})
