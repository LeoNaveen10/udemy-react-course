import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Welcome to Home page</h1>
      <p style={{ textAlign: 'center' }}>
        <button
          onClick={() => navigate('/products')}
          style={{ padding: '0.5rem', margin: '0.5rem' }}
        >
          To products page
        </button>
      </p>
    </>
  );
}
