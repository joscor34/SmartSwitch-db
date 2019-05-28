'use strict'

// Importamos las librerias
const mongoose = require('mongoose')
const Schema = mongoose.Schema

function setupUserModel (){
// creamos el schema
  const UserSchema = Schema({
    name: {
      type: String,
      require: true
    },
    email: {
      type: String,
      require: true
    },
    password: {
      type: String,
      require: true
    }
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  })
  
  return mongoose.model('User', UserSchema)
}

module.exports = setupUserModel
