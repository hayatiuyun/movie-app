// DetailPage.test.js

import { render } from '@testing-library/react';
import DetailPage from './page';
import LayoutComponent from '@/components/Layout';
import DetailPageComponent from '@/components/DetailPage';

jest.mock('next/router', () => ({
  useRouter: () => ({
    query: { id: '1' }, // Set the query parameter as needed
  }),
}));

describe('DetailPage', () => {
  it('renders DetailPage component inside LayoutComponent', () => {
    const { getByTestId } = render(<DetailPage />);
    const layoutComponent = getByTestId('layout-component');
    const detailPageComponent = getByTestId('detail-page-component');

    expect(layoutComponent).toBeInTheDocument();
    expect(detailPageComponent).toBeInTheDocument();
  });
});