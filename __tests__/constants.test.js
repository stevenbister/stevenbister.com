import CONSTANTS from '@/lib/constants';

it('returns the sitename', () => {
  expect(CONSTANTS().SITE_NAME).toEqual('Steven Bister');
});

it('returns the social links', () => {
  expect(CONSTANTS().LINKEDIN).toEqual(
    'https://www.linkedin.com/in/steven-bister/',
  );
  expect(CONSTANTS().GITHUB).toEqual('https://github.com/stevenbister');
});
