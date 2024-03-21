import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import Page from '../app/page'

test('home', () => {
  const { getByText } = render(<Page />)

  expect(getByText('src/app/page.tsx'))
})
