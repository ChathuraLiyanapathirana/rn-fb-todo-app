import moment from 'moment';

const getCurrentDateTime = (): string => {
  return moment().format('YYYY-MM-DD hh:mm:ss');
};

export {getCurrentDateTime};
