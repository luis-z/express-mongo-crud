module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      descripcion: String,
      monto: String
    },
    { timestamps: true }
  )

  const deuda = mongoose.model("deuda", schema);
  return deuda;
}
