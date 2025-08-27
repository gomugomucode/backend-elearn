// authMiddleware.js
function checkRole(allowedRoles) {
    return function (req, res, next) {
        const user = req.body.user; // user object passed from login or token

        if (!user) {
            return res.status(401).json({ status: 'error', message: 'User not logged in!' });
        }

        // Convert single role to array
        const roles = Array.isArray(allowedRoles) ? allowedRoles : [allowedRoles];

        if (!roles.includes(user.role)) {
            return res.status(403).json({ status: 'error', message: 'Access denied! Wrong role.' });
        }

        next();
    }
}

module.exports = { checkRole };
