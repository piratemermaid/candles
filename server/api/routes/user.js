const { Router } = require("express");
const { Session } = require("../helpers/account");
const models = require("../models/bookshelf_models");

const router = new Router();

router.get("/candles", async function (req, res) {
    const { sessionString } = req.cookies;

    if (!sessionString || !Session.verify(sessionString)) {
        const error = new Error("Invalid session");

        error.status = 400;

        return next(error);
    } else {
        const { username } = Session.parse(sessionString);

        const result = await models.User.forge({ username }).fetch({
            withRelated: ["userCandles.candle.company"]
        });

        const { userCandles } = result.toJSON();

        res.send(
            userCandles.map(
                ({
                    spring,
                    summer,
                    fall,
                    winter,
                    scent_notes,
                    size,
                    type,
                    strength,
                    throws,
                    scent,
                    overall_score,
                    date_acquired,
                    notes,
                    candle
                }) => {
                    return {
                        name: candle.name,
                        company: candle.company.name,
                        spring,
                        summer,
                        fall,
                        winter,
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
    }
});

module.exports = router;
