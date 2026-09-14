import AdminDashboard from '@/components/AdminDashboard';
import { redirect } from 'next/navigation';
import { verifyAuth } from '@/lib/auth';

export default async function AdminPage() {
  try {
    await verifyAuth();
  } catch {
    redirect('/admin-login');
  }
  return <AdminDashboard />;
}
