const Notice = ({ children }) => {
  return (
    <div className="banner box" style={{ padding: 'var(--space-xs)' }}>
      {children}
    </div>
  );
};

export default Notice;
