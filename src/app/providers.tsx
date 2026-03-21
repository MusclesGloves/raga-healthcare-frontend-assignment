import type { PropsWithChildren } from 'react';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { useAuthStore } from '../features/auth/store';

function AppProviders({ children }: PropsWithChildren) {
  const setUser = useAuthStore((state) => state.setUser);
  const setAuthReady = useAuthStore((state) => state.setAuthReady);

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setAuthReady(true);
    });

    return () => {
      unsubscribe();
    };
  }, [setAuthReady, setUser]);

  return <>{children}</>;
}

export default AppProviders;