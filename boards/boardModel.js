module.exports = (mongoose) => {
  const Schema = mongoose.Schema
  const boardModel = new Schema({
    id: {type:String, required:true},
    title: { type: String, required: true },
    initDate: { type: Date},
    lists: [{type:String}]
  })



  return mongoose.model('Board', boardModel)
}