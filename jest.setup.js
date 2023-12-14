// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'

jest.mock('@mui/material', () => {
    const originalModule = jest.requireActual('@mui/material');
    return {
        ...originalModule,
        useTheme: jest.fn().mockReturnValue({
            breakpoints: {
                up: jest.fn().mockImplementation(() => true), // Mock always matching media query
                down: jest.fn().mockImplementation(() => true),
            },
            transitions: {
                create: jest.fn(),
            },
        }),
        useMediaQuery: jest.fn().mockReturnValue(true), // Mock always matching media query
    };
});

jest.mock('next/navigation', () => {
    const actual = jest.requireActual("next/navigation");
  return {
    ...actual,
    useRouter: jest.fn(() => ({
      push: jest.fn(),
      pathname: "",
      back: jest.fn()
    })),
    useSearchParams: jest.fn(() => ({
      get: jest.fn(),
    })),
    usePathname: jest.fn(),
    useParams: jest.fn(() => ({id: 1}))
  };
})

jest.mock('next/font/google', () => {
    const context = {
        subsets: ['latin'],
        display: 'swap',
        weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
        variable: "antares",
    };

    return {
        Poppins: jest.fn(function () {
            return context;
        }),
        Inter: jest.fn(function () {
            return context;
        }),
    };
});
