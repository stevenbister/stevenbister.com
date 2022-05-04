import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialIcons = ({ links }) => {
  return (
    <ul
      className="content d-flex justify-center fs-2"
      style={{ '--stack-space': 'var(--space-s-m)' }}
    >
      {Object.entries(links).map(([key, value]) => (
        <li key={key} style={{ marginInline: 'var(--space-2xs)' }}>
          <a href={value} style={{ color: 'var(--color-text-primary)' }}>
            {key === 'LinkedIn' ? <FaLinkedin /> : <FaGithub />}
            <span className="sr-only">{key}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};
export default SocialIcons;
