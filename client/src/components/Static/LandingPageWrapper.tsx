import { AuthContextProvider } from '~/hooks/AuthContext';
import { Landing } from './Landing';

export default function LandingPageWrapper() {
  return (
    <AuthContextProvider>
      <Landing />
    </AuthContextProvider>
  );
}