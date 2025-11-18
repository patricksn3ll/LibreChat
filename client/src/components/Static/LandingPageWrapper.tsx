import { AuthProvider } from '~/hooks/AuthContext';
import { Landing } from './Landing';

export default function LandingPageWrapper() {
  return (
    <AuthProvider>
      <Landing />
    </AuthProvider>
  );
}