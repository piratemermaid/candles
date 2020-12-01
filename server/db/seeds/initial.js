const { keyBy } = require("lodash");
const { classes, classSkills } = require("../data/classes");
const skills = require("../data/skills");
const { students, studentSkills } = require("../data/students");
const houses = require("../data/houses");

exports.seed = async function (knex) {
    for (let i = tableOrder.length - 1; i >= 0; i--) {
        await resetTable(knex, tableOrder[i]);
    }
};

// delete table and reset to start at id 1
const resetTable = async (knex, tableName) => {
    await knex(tableName).del();
    await knex.raw(`ALTER SEQUENCE ${tableName}_id_seq RESTART WITH 1`);
};

const tableOrder = ["users"];
