exports.up = async function (knex) {
    await knex.schema.createTable("users", (table) => {
        table.increments("id");
        table.string("username").unique().notNullable();
        table.string("email").notNullable();
        table.string("password").notNullable();
        table.string("sessionId");
        table.string("reset_password_token");
        table.timestamp("reset_token_expiry");
    });

    await knex.schema.createTable("companies", (table) => {
        table.increments("id");
        table.string("name");
    });

    await knex.schema.createTable("candles", (table) => {
        table.increments("id");
        table.string("name");
        table.integer("company_id").references("id").inTable("companies");
        table.string("key").unique();
    });

    await knex.schema.createTable("users_candles", (table) => {
        table.increments("id");
        table.integer("user_id").references("id").inTable("users");
        table.integer("candle_id").references("id").inTable("candles");
        table.boolean("spring");
        table.boolean("summer");
        table.boolean("fall");
        table.boolean("winter");
        table.text("scent_notes");
        table.string("size");
        table.string("type");
        table.integer("strength");
        table.integer("throws");
        table.integer("scent");
        table.integer("overall_score");
        table.timestamp("date_acquired");
        table.text("notes");
    });
};

exports.down = async function (knex) {
    const tableOrder = ["users", "companies", "candles", "users_candles"];

    for (let i = tableOrder.length - 1; i >= 0; i--) {
        await knex.schema.dropTableIfExists(tableOrder[i]);
    }
};
