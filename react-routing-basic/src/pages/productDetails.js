import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function ProductDetailsPage() {
  const params = useParams();

  return (
    <>
      <h1>Product details</h1>
      <p>{params.productId}</p>
      <p>
        <Link to='..' relative='path'>
          Back
        </Link>
      </p>
    </>
  );
}
