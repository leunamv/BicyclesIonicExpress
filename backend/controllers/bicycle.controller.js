const db = require ("../models" ) ;
const Bicycle = db.bicycles ; 
const Op = db.Sequelize.Op;
  // Crear y guardar un bicycle nuevo
exports.create = ( req , res ) => {
    //validate request
    if(!req.body.brand){
        res.status(400).send({
            message:"Content can  no be empty!"
        });
        return;
    }
    //Create a bicycle
    const bicycle = { //DE NUEVO---> SINGULAR O PLURAL
     //PLURAL O SINGULAR??       
        brand : req.body.brand,
        model : req.body.model
    };
    //Save Bicycle in database
    Bicycle.create(bicycle)
    .then(data =>{
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error ocurred while create  the bicycle"
        });
    })
 };
// Recuperar todos los bicycles  de la base de datos 
exports.findAll = ( req , res ) => {
    Bicycle.findAll().
    then(data => {
      console.log("llegó al back getall");
    res.send(data);
 })
 .catch(err => {
    res.status(500).send({
        message:err.message || "Some error ocurred while retrieving bicycles."
    });
});
};


//Find a single Bicycle
exports.findOne = (req, res)=>{
    const id = req.params.id;

    Bicycle.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: 'Cannot find Bicycle with id=${id}.'
        });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).send({
        message: "Error retrieving Bicycle with id=" + id
      });
    });
    
};

//Update a Bicycle by the id in the request
exports.update = (req, res)=>{

    const id = req.params.id;

    Bicycle.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Bicycle was updated successfully."
          });
        } else {
          res.send({
            message: 'Cannot update Bicycle with id=${id}. Maybe Bicycle was not found or req.body is empty!'
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Bicycle with id=" + id
        });
      });
  };

//Delete a Bicycle wit the specified id in the request
exports.delete = (req, res)=>{

    const id = req.params.id;
    console.log("llegó al back delete");

  Bicycle.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Bicycle was deleted successfully!"
        });
      } else {
        res.send({
          message: 'Cannot delete Bicycle with id=${id}. Maybe Bicycle was not found!'
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Bicycle with id=" + id
      });
    });
};
