// HOC/protectedRoute.js

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { getUserRole, getToken } from './AuthContext';

const withAuth = (WrappedComponent, allowedRoles) => {
  return (props) => {
    const router = useRouter();
    const token = getToken();
    const role = getUserRole();

    useEffect(() => {
      if (!token) {
        router.push('/Login');
        return;
      }
      if (!allowedRoles.includes(role)) {
        router.push('/Unauthorized');
      }
    }, [token, role, allowedRoles, router]);

    return token && allowedRoles.includes(role) ? (
      <WrappedComponent {...props} />
    ) : null;
  };
};

export default withAuth;
