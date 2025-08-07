import { redirect } from 'next/navigation';

export default function Home() {
  return redirect('/api/assistant'); // or update to your actual chat path later
}
