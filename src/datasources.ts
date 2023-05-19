import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

export const countryData = [
    {
      name: 'United Kingdom',
      countryCode: 'GB',
      languageSpoken: 'English',
      capital: 'London',
    },
    {
      name: 'Netherlands',
      countryCode: 'NL',
      languageSpoken: 'Dutch',
      capital: 'Amsterdam',
    },
    {
      name: 'Ukraine',
      countryCode: 'UA',
      languageSpoken: 'Ukrainian',
      capital: 'Kyiv',
    },
    {
      name: 'Bulgaria',
      countryCode: 'BG',
      languageSpoken: 'Bulgarian',
      capital: 'Sofia',
    },
  ];
