const { keyBy } = require("lodash");
const { companies, candles, user_candles } = require("../data/testData");
// const { hash } = require("../../../api/account/helpers/account");
const { hash } = require("../../api/helpers/account");

exports.seed = async function (knex) {
    for (let i = tableOrder.length - 1; i >= 0; i--) {
        await resetTable(knex, tableOrder[i]);
    }

    await knex("users").insert({
        username: "testaccount",
        email: "a@a.com",
        password: hash("userpass12")
    });

    const companiesByName = keyBy(
        await knex("companies")
            .insert(
                companies.map((name) => {
                    return { name };
                })
            )
            .returning("*"),
        "name"
    );

    const candlesByKey = keyBy(
        await knex("candles")
            .insert(
                candles.map(({ name, company }) => {
                    return {
                        name,
                        company_id: companiesByName[company].id,
                        key: `${name}_${company}`
                    };
                })
            )
            .returning("*"),
        "key"
    );

    await knex("users_candles").insert(
        user_candles.map(
            ({
                name,
                company,
                seasons,
                scent_notes,
                size,
                type,
                strength,
                throws,
                scent,
                overall_score,
                date_acquired,
                notes
            }) => {
                return {
                    user_id: 1,
                    candle_id: candlesByKey[`${name}_${company}`].id,
                    spring: seasons.includes("spring"),
                    summer: seasons.includes("summer"),
                    fall: seasons.includes("fall"),
                    winter: seasons.includes("winter"),
                    scent_notes,
                    size,
                    type,
                    strength,
                    throws,
                    scent,
                    overall_score,
                    date_acquired,
                    notes
                };
            }
        )
    );
};

// delete table and reset to start at id 1
const resetTable = async (knex, tableName) => {
    await knex(tableName).del();
    await knex.raw(`ALTER SEQUENCE ${tableName}_id_seq RESTART WITH 1`);
};

const tableOrder = ["users", "companies", "candles", "users_candles"];
