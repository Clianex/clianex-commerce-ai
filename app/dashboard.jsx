// app/dashboard.jsx
import { withAuth } from '@clerk/nextjs';

function Dashboard() {
  return (
    <div>
      <h1>Bienvenido al Dashboard de Clianex</h1>
      {/* El contenido del Dashboard aquí */}
    </div>
  );
}

export default withAuth(Dashboard);
