require('dotenv').config()
const PouchDB = require('pouchdb-core')
PouchDB.plugin(require('pouchdb-adapter-http'))
PouchDB.plugin(require('pouchdb-find'))
const HTTPError = require('node-http-error')
const db = new PouchDB(process.env.COUCHDB_URL + process.env.COUCHDB_NAME)
const { pluck, map, prop } = require('ramda')

const get = id => db.get(id)
const create = doc => db.put(doc)
const update = doc => db.put(doc)
const deleteDoc = id => db.get(id).then(doc => db.remove(doc))
const find = id => db.find(id)

const allDocs = options => {
  return db.allDocs(options).then(docs => pluck('doc', docs.rows))
}

const dalHelper = {
  get,
  create,
  update,
  deleteDoc,
  find,
  allDocs
}

module.exports = dalHelper
