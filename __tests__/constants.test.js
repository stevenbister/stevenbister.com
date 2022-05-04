import CONSTANTS from '@/lib/constants';

it('returns the sitename', () => {
  expect(CONSTANTS().SITE_NAME).toEqual('Steven Bister');
});
