/* const knex = require("../config/knexfile");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const formidable = require("formidable");
const fs = require("fs");

exports.listUser = (req, res) => {
  knex("usuarios")
    .then((resultado) => {
      res.json(resultado);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
}; */
/* 
exports.register = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: "Image could not upload",
      });
    }
    const { email, password, nombre } = fields;

    const salt = await bcrypt.genSalt(10);
    const passwordEncrypt = await bcrypt.hash(password, salt);
    knex("usuarios")
      .where({ email: email })
      .then((resultado) => {
        if (resultado.length) {
          res.status(400).json({ error: "El email ya esta siendo utilizado" });
          return;
        }

        let fileData;
        let fileType;
        if (files.file) {
          if (files.file.size > 3000000) {
            return res.status(400).json({
              error: "Tamaño máximo de la imagen: 1MB",
            });
          }

          if (
            files.file.mimetype != "image/png" &&
            files.file.mimetype != "image/jpg"
          ) {
            return res.status(400).json({
              error: "Formato de archivo invalido",
            });
          }

          fileData = fs.readFileSync(files.file.filepath);
          fileType = files.file.mimetype;

          knex("usuarios")
            .insert({
              email: email,
              password: passwordEncrypt,
              nombre: nombre,
              filedata: fileData,
              filetype: fileType,
            })
            .then(() => {
              res.json({
                success: true,
                mensaje: "El usuario se ha registrado correctamente",
              });
            })
            .catch((error) => {
              res.status(400).json({ error: error.message });
            });
        }
      })
      .catch((error) => {
        res.status(400).json({ error: error.message });
      });
  });
};
 */
/* exports.login = async (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: "Image could not upload",
      });
    }
    const { email, password } = fields;
 */
/* res
      .status(400)
      .json({ file: files.file, email: email, password: password }); */
/* if (!email || !email.length) {
      return res.status(400).json({ error: "El mail es obligatorio" });
    }
    if (!password || password.length < 8) {
      return res
        .status(400)
        .json({ error: "La contraseña debe tener un mínimo de 8 caracteres" });
    }
 */
//file

//SELECT
/*   knex("usuarios")
      .where({ email: email })
      .then(async (resultado) => {
        if (!resultado.length) {
          res.status(404).json({
            error: "Email y/o contraseña incorrecta/s",
          });
          return;
        }
        const validatePassword = await bcrypt.compare(
          password,
          resultado[0].password
        );
        if (!validatePassword) {
          res.status(404).json({
            error: "Email y/o contraseña incorrecta/s",
          });
          return;
        }

        const token = jwt.sign(
          {
            nombre: resultado[0].nombre,
            email: resultado[0].email,
            id: resultado[0].id,
            perfil: resultado[0].perfil,
          },
          process.env.TOKEN_SECRET
        );

        //FILE
        let fileData;
        let fileType;
        if (files.file) {
          if (files.file.size > 1000000) {
            return res.status(400).json({
              error: "Tamaño máximo de la imagen: 1MB",
            });
          }

          fileData = fs.readFileSync(files.file.filepath);
          fileType = files.file.mimetype;

          knex("usuarios")
            .where("id", resultado[0].id)
            .update({
              filedata: fileData,
              filetype: fileType,
            })
            .then(() => {
              res.json({ success: true, token: token });
              return;
            })
            .catch((error) => {
              res.status(400).json({ error: error.message });
              return;
            });
        } else {
          res.json({ success: true, token: token });
        }

        //res.json({ success: true, token: token });
      })
      .catch((error) => {
        res.status(400).json({ error: error.message });
      });
  });
}; */
/* 
exports.photo = (req, res) => {
  const userId = req.params.id;
  knex("usuarios")
    .where({ id: userId })
    .then((result) => {
      res.set("Content-Type", result[0].filetype);
      return res.send(result[0].filedata);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

exports.info = (req, res) => {
  res.json(req.user);
}; */
