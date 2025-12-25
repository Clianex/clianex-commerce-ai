// pages/profile.js
import { withAuth } from '@clerk/nextjs';

const ProfilePage = () => {
  return (
    <div>
      <h1>Bienvenido al perfil</h1>
      <p>Solo los usuarios autenticados pueden ver esta página.</p>
    </div>
  );
};

export default withAuth(ProfilePage);
