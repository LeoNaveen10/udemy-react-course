import { Link } from 'react-router-dom';

const PRODUCTS = [
  { id: 'p1', title: 'product-1' },
  { id: 'p2', title: 'product-2' },
  { id: 'p3', title: 'product-3' }
];

export default function ProductsPage() {
  return (
    <>
      <h1>Welcome to Products page</h1>
      <ul className='products-list'>
        {PRODUCTS.map(p => (
          <li key={p.id}>
            <Link to={`/products/${p.title}`}>{p.title}</Link>{' '}
          </li>
        ))}
      </ul>
    </>
  );
}
