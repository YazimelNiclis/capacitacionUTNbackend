exports.verifyPerfil1 = (req, res, next) => {
  const user = req.user;
  if (user.perfil != 1) {
    res.status(401).json({
      error: "Acceso al recurso denegado, se requiere perfil de administrador",
    });
    return;
  }

  next();
};

exports.verifyPerfil2 = (req, res, next) => {
  const user = req.user;
  if (user.perfil != 2) {
    res.status(401).json({
      error: "Acceso al recurso denegado, se requiere perfil de administrador",
    });
    return;
  }

  next();
};

exports.verifyPerfil3 = (req, res, next) => {
  const user = req.user;
  if (user.perfil != 3) {
    res.status(401).json({
      error: "Acceso al recurso denegado, se requiere perfil de administrador",
    });
    return;
  }

  next();
};
