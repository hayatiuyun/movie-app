import React, { FC, useState } from 'react';
import Link from 'next/link';
import Grid from '@mui/material/Grid';
import { navigations as headerNavigations } from '@/components/Layout/Navigation/navigation.data';
import { FooterSectionTitle } from '@/components/Layout/Footer';
import { Collapse, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const solutionsMenu = [
  {
    label: 'Smart Utilities',
    path: `${process.env.NEXT_PUBLIC_URL_PREV_VERSION}/solutions/smart-utilities`,
  },
  {
    label: 'Track and Trace',
    path: `${process.env.NEXT_PUBLIC_URL_PREV_VERSION}/solutions/track-and-trace`,
  },
  {
    label: 'Smart Manufacture',
    path: `${process.env.NEXT_PUBLIC_URL_PREV_VERSION}/solutions/smart-manufacture`,
  },
  {
    label: 'Smart Poultry & Farming',
    path: `${process.env.NEXT_PUBLIC_URL_PREV_VERSION}/smart-poultry`,
  },
  {
    label: 'Antares Education',
    path:  `${process.env.NEXT_PUBLIC_URL_PREV_VERSION}/antares-education`,
  },
  {
    label: 'Smart Home',
    path: `https://eazy.co.id`,
  },
  {
    label: 'Smart Surveilance',
    path: '/coming-soon',
  },
];

const servicesMenu = [
  { label: 'Antares Workshop', path: '/coming-soon' },
  { label: 'Device Design & Prototyping', path: '/coming-soon' },
];
const productsMenu = [
  { label: 'Connectivity', path: `${process.env.NEXT_PUBLIC_URL_PREV_VERSION}/connectivity` },
  { label: 'Platform', path: `${process.env.NEXT_PUBLIC_URL_PREV_VERSION}/platform` },
];
const legalMenu = [
  { label: 'Privacy Policy', path: '/legal/privacy-policy' },
  { label: 'Terms & Conditions', path: '/legal/terms-and-conditions' },
];

const NavigationItem = ({ label, path }) => {
  return (
    <Link href={path} passHref>
      <span className='mb-1 block !text-sm !leading-7 text-tertiary-400 no-underline hover:underline'>
        {label}
      </span>
    </Link>
  );
};

const AccordionList = ({ title, items }) => {
  const [isAccordionOpen, setAccordionOpen] = useState(false);
  const { breakpoints } = useTheme()

  const matchLargeView = useMediaQuery(breakpoints.up('md'))

  const toggleAccordion = () => {
    setAccordionOpen(!isAccordionOpen);
  };

  return (
    <div>
      <FooterSectionTitle title={title} onClick={toggleAccordion} />
      <Collapse in={isAccordionOpen || matchLargeView}>
        <div>
          {items.map(({ label, path }, index) => (
            <NavigationItem key={index + path} label={label} path={path} />
          ))}
        </div>
      </Collapse>
    </div>
  );
};

const FooterNavigation = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <AccordionList title='Solutions' items={solutionsMenu} />
      </Grid>
      <Grid item xs={12} md={4}>
        <Grid container columns={1} gap={3}>
          <Grid item xs={12} md={4}>
            <AccordionList title='Services' items={servicesMenu} />
          </Grid>
          <Grid item xs={12} md={4}>
            <AccordionList title='Products' items={productsMenu} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={4}>
        <Grid container columns={1} gap={3}>
          <Grid item xs={12} md={4}>
            <AccordionList title='Legal' items={legalMenu} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FooterNavigation;
