import { render, screen } from '@testing-library/react';
import HomeContent from '@/components/HomeContent';
import CONSTANTS from '@/lib/constants';

it('displays the content for the homepage', () => {
  const { LINKEDIN, GITHUB } = CONSTANTS();
  render(
    <HomeContent
      intro="Hello! Welcome to my site, it's under contstruction at the moment
      so please excuse the mess."
      links={{
        LinkedIn: LINKEDIN,
        GitHub: GITHUB,
      }}
    />,
  );

  const links = screen.getAllByRole('link');
  const linkedinLink = screen.getByRole('link', { name: 'LinkedIn' });
  const githubLink = screen.getByRole('link', { name: 'GitHub' });

  expect(links).toHaveLength(2);
  expect(linkedinLink).toHaveAttribute(
    'href',
    'https://www.linkedin.com/in/steven-bister/',
  );
  expect(githubLink).toHaveAttribute('href', 'https://github.com/stevenbister');
});
