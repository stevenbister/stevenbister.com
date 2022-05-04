import SocialIcons from './SocialIcons';

const HomeContent = ({ intro, links }) => {
  return (
    <div className="container cover">
      <div className="stack align-center">
        <p className="content">{intro}</p>

        <SocialIcons links={links} />
      </div>
    </div>
  );
};
export default HomeContent;
