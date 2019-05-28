'use strict'

// Importamos las librerias
const mongoose = require('mongoose')
const Schema = mongoose.Schema

function setupSensorModel (){
// creamos el schema
  const SensorSchema = Schema({
    name: {
      type: String,
      require: true
    },
    read: {
      type: Number,
      require: true
    }
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  })
  
  return mongoose.model('Model', SensorSchema)
}

module.exports = setupSensorModel
