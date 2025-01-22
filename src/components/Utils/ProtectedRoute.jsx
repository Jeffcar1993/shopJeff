import PropTypes from 'prop-types';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({
    canActivate,
    redirectPath = '/login'
}) => {
    if (!canActivate) {
        return <Navigate to={redirectPath} replace />;
    }

    return <Outlet />;
};

// Validaciones de las props
ProtectedRoute.propTypes = {
    canActivate: PropTypes.bool.isRequired, // Obligatorio y de tipo booleano
    redirectPath: PropTypes.string // Opcional y de tipo string
};

export default ProtectedRoute;
