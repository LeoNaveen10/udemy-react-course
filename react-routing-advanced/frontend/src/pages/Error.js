import MainNavigation from '../components/MainNavigation';
import PageContent from '../components/PageContent';
import { useRouteError } from 'react-router-dom';

export default function ErrorPage(params) {
  const error = useRouteError();
  let title = 'an error occured';
  let message = 'something went wrong';

  if (error.status == 500) {
    message = JSON.parse(error.data).message;
  }

  if (error.status == 404) {
    title = 'Not found';
    message = 'Could not find the resource or page.';
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}
