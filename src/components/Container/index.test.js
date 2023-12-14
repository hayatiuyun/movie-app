import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import ContainerComponent from '.'

describe('container components', () => {
    it('should render', () => { 
        const { container } = render(<ContainerComponent />)

        expect(container).toBeInTheDocument();
    })
})