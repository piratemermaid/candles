const { bookshelf } = require("./config");

const User = bookshelf.model("User", {
    tableName: "users",
    userCandles() {
        return this.hasMany("UserCandle");
    }
});

const UserCandle = bookshelf.model("UserCandle", {
    tableName: "users_candles",
    candle() {
        return this.belongsTo("Candle");
    }
});

const Candle = bookshelf.model("Candle", {
    tableName: "candles",
    company() {
        return this.belongsTo("Company");
    }
});

const Company = bookshelf.model("Company", {
    tableName: "companies"
});

module.exports = { User };
