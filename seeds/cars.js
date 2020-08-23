
exports.seed = async function(knex) {
  await knex("cars").truncate()

  await knex("cars").insert([
    { vin: 12345, make: "Hyundai", model: "Sonata", mileage: 108547, transmission: "manual", title: "clean" },
    { vin: 65842, make: "Chevy", model: "Malibu", mileage: 119851, transmission: "automatic", title: "clean" },
    { vin: 74812, make: "Pontiac", model: "Grand Am", mileage: 75412, transmission: "automatic", title: "clean" },
  ])
};
