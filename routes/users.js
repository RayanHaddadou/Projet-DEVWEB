const express = require("express")
const router = express.Router()

const db = require("../database")
const {getAllUsers, createNewUser, updateUser, deleteUser} = require("../controllers/usersControllers");

module.exports = router
// GET METHOD
router.get("/users", getAllUsers)



// POST : CRÉER un nouvel utilisateur, basé sur les données passées dans le corps(body) de la requête
router.post("/users",createNewUser)

// PUT : MODIFIER un utilisateur basé sur les données enoyées dans le corps(body) et le paramètre passé dans l'url
router.put("/:id",updateUser)

//DELETE METHOD
router.delete("/:id",deleteUser)