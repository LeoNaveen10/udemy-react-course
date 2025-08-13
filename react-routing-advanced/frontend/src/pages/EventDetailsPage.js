import {
  Link,
  useParams,
  useLoaderData,
  useRouteLoaderData,
  redirect
} from 'react-router-dom';
import EventItem from '../components/EventItem';

export default function EventDetailsPage() {
  const data = useRouteLoaderData('event-detail');
  return <EventItem event={data.event} />;
}

export async function action({ request, params }) {
  const response = await fetch(
    `http://localhost:8080/events/${params.eventId}`,
    {
      method: request.method
    }
  );
  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: 'failure in Deleting the event' }),
      { status: 500 }
    );
  }
  return redirect('/events');
}
