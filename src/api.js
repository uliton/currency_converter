/* eslint-disable no-console */
const NBU_API_URL = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/';
const MONO_API_URL = 'https://api.monobank.ua/bank/currency';

export const getCours = async() => {
  try {
    const response = await fetch(`${NBU_API_URL}/exchange?json`);

    return response.json();
  } catch {
    throw new Error();
  }
};

export const getHeaderCours = async() => {
  try {
    const response = await fetch(`${MONO_API_URL}`);

    return response.json();
  } catch {
    throw new Error();
  }
};
