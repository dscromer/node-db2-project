
exports.up =  async function(knex) {
    await knex.schema.createTable("cars", (table) => {
        table.increments("id")
        table.integer("vin").notNull().unique()
        table.text("make").notNull()
        table.text("model").notNull()
        table.integer("mileage").notNull().defaultTo(0)
        table.text("transmission").defaultTo("unknown")
        table.text("title").defaultTo("unknown")
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("cars")
};
