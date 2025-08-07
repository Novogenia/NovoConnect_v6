import { redirect } from 'next/navigation';

export default function Home() {
  return redirect('/api/assistant'); // ✅ matches your existing chat page
}
