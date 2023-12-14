// __mocks__/fontMock.js

export const Poppins = jest.fn(() => ({
    subsets: ['latin'],
    display: 'swap',
    weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
    variable: "--antares-poppins",
  }));
  
  export const Inter = jest.fn(() => ({
    subsets: ['latin'],
    display: 'swap',
    weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
    variable: "--antares-inter",
  }));
  