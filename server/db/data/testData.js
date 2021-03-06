const companies = ["Yankee", "Kringle", "Goose Creek", "Aldi"];

const sp = "spring";
const su = "summer";
const f = "fall";
const w = "winter";
const all = [sp, su, f, w];

const candles = [
    { name: "Autumn Harvest", company: "Kringle" },
    { name: "Autumn Amber", company: "Kringle" },
    { name: "Pumpkin Sage", company: "Kringle" },
    { name: "Clearwater Creek", company: "Kringle" },
    { name: "Lemon Lavender", company: "Kringle" },
    { name: "Aqua", company: "Kringle" },
    { name: "Apple Cider", company: "Goose Creek" },
    { name: "Crunchy Leaves", company: "Goose Creek" },
    { name: "Ivory Pumpkin", company: "Goose Creek" },
    { name: "Sweet Pine & Snowflake", company: "Goose Creek" },
    { name: "Nordic Spruce", company: "Goose Creek" },
    { name: "Night Before Christmas", company: "Goose Creek" },
    { name: "Earth & Pine", company: "Aldi" },
    { name: "Balsam & Cedar", company: "Aldi" },
    { name: "Cloves & Cinnamon", company: "Aldi" },
    { name: "Holiday Cookie", company: "Aldi" }
];

const user_candles = [
    {
        name: "Autumn Harvest",
        company: "Kringle",
        seasons: [f],
        scent_notes: "",
        size: "S",
        type: "Tumbler",
        strength: 4,
        throw: 3,
        scent: 5,
        overall_score: 4,
        date_acquired: null,
        notes: ""
    },
    {
        name: "Autumn Amber",
        company: "Kringle",
        seasons: [f],
        scent_notes: "",
        size: "L",
        type: "Tumbler",
        strength: null,
        throw: null,
        scent: null,
        overall_score: null,
        date_acquired: null,
        notes: ""
    },
    {
        name: "Pumpkin Sage",
        company: "Kringle",
        seasons: [f],
        scent_notes: "",
        size: "S",
        type: "Tumbler",
        strength: 5,
        throw: 4,
        scent: 5,
        overall_score: 5,
        date_acquired: null,
        notes: ""
    },
    {
        name: "Clearwater Creek",
        company: "Kringle",
        seasons: [f],
        scent_notes: "subtle",
        size: "L",
        type: "Tumbler",
        strength: 3,
        throw: 3,
        scent: 5,
        overall_score: 4,
        date_acquired: null,
        notes: "maybe too subtle, but might work better not in a big loft apt"
    },
    {
        name: "Lemon Lavender",
        company: "Kringle",
        seasons: all,
        scent_notes: "",
        size: "L",
        type: "Tumbler",
        strength: 5,
        throw: 5,
        scent: 5,
        overall_score: 5,
        date_acquired: null,
        notes: "amazing"
    },
    {
        name: "Aqua",
        company: "Kringle",
        seasons: [su],
        scent_notes: "",
        size: "L",
        type: "Tumbler",
        strength: null,
        throw: null,
        scent: null,
        overall_score: null,
        date_acquired: null,
        notes: ""
    },
    {
        name: "Apple Cider",
        company: "Goose Creek",
        seasons: [f],
        scent_notes: "cider smell on point",
        size: "L",
        type: "Jar",
        strength: 5,
        throw: 5,
        scent: 5,
        overall_score: 5,
        date_acquired: null,
        notes: "great throw in loft apt"
    },
    {
        name: "Crunchy Leaves",
        company: "Goose Creek",
        seasons: [f],
        scent_notes: "",
        size: "L",
        type: "Jar",
        strength: null,
        throw: null,
        scent: 5,
        overall_score: null,
        date_acquired: null,
        notes: ""
    },
    {
        name: "Ivory Pumpkin",
        company: "Goose Creek",
        seasons: [f],
        scent_notes: "",
        size: "L",
        type: "3-Wick",
        strength: 5,
        throw: 5,
        scent: 2,
        overall_score: 2,
        date_acquired: null,
        notes: "just not my taste"
    },
    {
        name: "Sweet Pine & Snowflake",
        company: "Goose Creek",
        seasons: [f],
        scent_notes: "",
        size: "L",
        type: "Jar",
        strength: null,
        throw: null,
        scent: null,
        overall_score: null,
        date_acquired: null,
        notes: ""
    },
    {
        name: "Nordic Spruce",
        company: "Goose Creek",
        seasons: [f],
        scent_notes: "",
        size: "L",
        type: "Jar",
        strength: null,
        throw: null,
        scent: null,
        overall_score: null,
        date_acquired: null,
        notes: ""
    },
    {
        name: "Night Before Christmas",
        company: "Goose Creek",
        seasons: [f],
        scent_notes: "",
        size: "L",
        type: "Jar",
        strength: null,
        throw: null,
        scent: null,
        overall_score: null,
        date_acquired: null,
        notes: ""
    },
    {
        name: "Earth & Pine",
        company: "Aldi",
        seasons: [f],
        scent_notes: "sweet & homey",
        size: "M",
        type: "Jar",
        strength: 5,
        throw: 5,
        scent: 5,
        overall_score: 5,
        date_acquired: null,
        notes: "crackles"
    },
    {
        name: "Balsam & Cedar",
        company: "Aldi",
        seasons: [f],
        scent_notes: "",
        size: "M",
        type: "Jar",
        strength: null,
        throw: null,
        scent: 5,
        overall_score: null,
        date_acquired: null,
        notes: ""
    },
    {
        name: "Cloves & Cinnamon",
        company: "Aldi",
        seasons: [f],
        scent_notes: "",
        size: "M",
        type: "Jar",
        strength: null,
        throw: null,
        scent: 5,
        overall_score: null,
        date_acquired: null,
        notes: ""
    },
    {
        name: "Holiday Cookie",
        company: "Aldi",
        seasons: [f],
        scent_notes: "smells exactly like the name",
        size: "M",
        type: "Jar",
        strength: 5,
        throw: null,
        scent: 5,
        overall_score: null,
        date_acquired: null,
        notes: "too sweet for my taste but my bf loves it"
    }
];

// seasons: [f],
// scent_notes: "",
// size: "L",
// type: "Jar",
// strength: null,
// throw: null,
// scent: null,
// overall_score: null,
// date_acquired: null,
// notes: ""

module.exports = { companies, candles, user_candles };
