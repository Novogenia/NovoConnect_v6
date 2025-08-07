import { redirect } from 'next/navigation';

export default function Home() {
  return redirect('/en/default/chat');
}
