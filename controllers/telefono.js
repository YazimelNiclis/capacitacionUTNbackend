const { json } = require("body-parser");
const telefonos = require("../agenda");
const knex = require("../config/knexfile");

/* //knex('tabla').condiciones.campos
exports.list = (req, res) => {
  knex("clientes")
    .then((clientes) => {
      res.json(clientes);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
}; */

//knex('tabla').condiciones.campos
exports.list = (req, res) => {
  knex("clientes").then((clientes) => {
    res.json({ listaClientes: clientes, datosUsuario: req.user });
  });
};

exports.searchTelefono = (request, res) => {
  const numeroCliente = request.params.numero;
  knex
    .select("*")
    .from("clientes")
    .where("clienteid", numeroCliente)
    .then((clientes) => {
      if (clientes.length) {
        res.json(clientes);
      } else {
        res.status(404).json({ error: "El cliente no fue encontrado" });
      }
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

exports.searchTelefono1 = (req, res) => {
  const id = Number(req.params.numero);

  const result = telefonos.find((telefono) => telefono.id === id);

  if (!result) {
    res
      .status(404)
      .json({ error: `No se han encontrado registros con id: ${id}` });
  }

  res.json(result);
};

exports.addTelefono = (req, res) => {
  const { id, name, number } = req.body;
  console.log("Esto primero");
  knex("telefono")
    .where("number", number)
    .then((respuesta) => {
      if (respuesta.length) {
        res
          .status(400)
          .json({ error: "Ya existe un registro con ese numero de telefono" });
        return;
      }
      knex("telefono")
        .insert({ id: id, name: name, number: number })
        .then(() => {
          res.status(201).json({
            message: "Se ha registrado correctamente un nuevo telefono",
          });
        })
        .catch((error) => {
          res.status(400).json({ error: error.message });
        });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });

  //TRANSACCION A LA BASE DE DATOS
};

exports.probandoJoin = (req, res) => {
  const idCliente = req.params.id;
  knex("ordenes")
    .innerJoin("clientes", "ordenes.clienteid", "clientes.clienteid")
    .select("clientes.clienteid", "ordenes.fechaorden")
    .where("clientes.clienteid", idCliente)
    .then((respuesta) => {
      res.json(respuesta);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};
