import ContentLoader from 'react-content-loader';

import './TodoLoader.css';

const TodoLoader = () => {
  return (
    <div className="loader-container">
      <ContentLoader
        speed={4}
        viewBox="0 0 760 288"
        backgroundColor="#d8dee9"
        foregroundColor="#3b4252"
        preserveAspectRatio="none"
      >
        <rect x="0" y="0" rx="4" ry="4" width="100%" height="51.2" />
        <rect x="0" y="59" rx="4" ry="4" width="100%" height="51.2" />
        <rect x="0" y="118" rx="4" ry="4" width="100%" height="51.2" />
        <rect x="0" y="177" rx="4" ry="4" width="100%" height="51.2" />
        <rect x="0" y="236" rx="4" ry="4" width="100%" height="51.2" />
      </ContentLoader>
    </div>
  );
};

export { TodoLoader };
