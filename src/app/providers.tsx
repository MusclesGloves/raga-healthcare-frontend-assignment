import type { PropsWithChildren } from 'react';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { useAuthStore } from '../features/auth/store';

function AppProviders({ children }: PropsWithChildren) {
  const setUser = useAuthStore((state) => state.setUser);
  const setAuthReady = useAuthStore((state) => state.setAuthReady);

  useEffect(() => {
    console.log('AppProviders mounted');
    console.log('Firebase auth instance:', auth);

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log('onAuthStateChanged fired:', user);
      setUser(user);
      setAuthReady(true);
    });

    return () => {
      console.log('AppProviders unmounted');
      unsubscribe();
    };
  }, [setAuthReady, setUser]);

  return <>{children}</>;
}

export default AppProviders;