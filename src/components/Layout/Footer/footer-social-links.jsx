import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { Instagram, YouTube } from '@mui/icons-material';

export const socialLinks = [
  {
    name: 'YouTube',
    link: 'https://www.youtube.com/channel/UCiy8xJo11Ld2dg3sbZBPPQA',
    icon: <YouTube />,
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/antaressupport/',
    icon: <Instagram />,
  },
  {
    name: 'WhatsApp',
    link: 'https://chat.whatsapp.com/E2IQN7NV6b5HaTFXJgrYqj',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='25'
        height='24'
        viewBox='0 0 25 24'
        fill='none'
      >
        <path
          d='M12.4854 0.504883C6.25076 0.504883 1.19485 5.52395 1.19485 11.7125C1.19485 13.8273 1.78909 15.8057 2.81197 17.5015L0.785706 23.5049L7.03983 21.5167C8.65695 22.4036 10.5176 22.9104 12.4952 22.9104C18.7298 22.9104 23.7857 17.8913 23.7857 11.7028C23.776 5.52395 18.7201 0.504883 12.4854 0.504883ZM18.0966 15.9617C17.8336 16.6244 16.6256 17.2189 16.0996 17.2481C15.5735 17.2773 15.554 17.6574 12.6705 16.41C9.78698 15.1528 8.05296 12.1023 7.91658 11.9074C7.7802 11.7125 6.79629 10.3091 6.85474 8.90573C6.91319 7.50234 7.68278 6.82988 7.95555 6.557C8.22831 6.28412 8.54005 6.23539 8.73488 6.22565C8.95894 6.22565 9.1148 6.2159 9.28041 6.22565C9.44602 6.23539 9.6993 6.18666 9.92336 6.77141C10.1377 7.35615 10.6637 8.77904 10.7319 8.92522C10.8001 9.07141 10.8391 9.23709 10.7319 9.432C10.6248 9.61717 10.576 9.73412 10.4299 9.8998C10.2838 10.0655 10.1084 10.2604 9.98181 10.3871C9.83568 10.5235 9.67008 10.6697 9.83568 10.9621C9.99155 11.2545 10.5371 12.2095 11.3651 12.999C12.427 14.0125 13.3427 14.3536 13.6252 14.4998C13.9077 14.6557 14.0733 14.6362 14.2486 14.4511C14.424 14.2659 14.9988 13.6422 15.2033 13.3595C15.4079 13.0769 15.593 13.1354 15.856 13.2426C16.119 13.3498 17.5024 14.0905 17.7849 14.2464C18.0674 14.4023 18.2525 14.4803 18.3206 14.5973C18.3888 14.7337 18.3694 15.3087 18.0966 15.9617Z'
          fill='white'
        />
      </svg>
    ),
  },
];

const SocialLinkItem = ({ item }) => (
  <Box
    component='li'
    sx={{
      display: 'inline-block',
      color: 'primary.contrastText',
    }}
  >
    <Link
      target='_blank'
      sx={{
        lineHeight: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 36,
        height: 36,
        lg: {
          width: 40,
        height: 40,
        },
        borderRadius: 'var(--12px, 12px)',
        color: 'text.secondary',
        backgroundColor: 'primary.main',
        '&:hover': {
          backgroundColor: 'primary.dark',
        },
        '& img': {
          fill: 'currentColor',
          width: 22,
          height: 'auto',
        },
        "& svg": {
          width: 20,
          height: 'auto',
        }
      }}
      href={item.link}
    >
      {item.icon}
    </Link>
  </Box>
);

// default
const SocialLinks = () => {
  return (
    <Box sx={{ lg:{ml: -1},  }}>
      <Box
        component='ul'
        sx={{
          m: 0,
          p: 0,
          lineHeight: 0,
          borderRadius: 3,
          listStyle: 'none',
          display: "flex",
          gap: "16px"
        }}
      >
        {socialLinks.map((item) => {
          return <SocialLinkItem key={item.name} item={item} />;
        })}
      </Box>
    </Box>
  );
};

export default SocialLinks;