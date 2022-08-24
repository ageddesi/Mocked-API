import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import PremierLeagueData2022 from "../data/football-premier-league-2022";

module.exports = function(app: core.Express){

    // Get a list of teams in the uk premier football league from 2022
    app.get("/sports/football/leagues/premier/teams", (req: Request, res: Response) => {
        res.json(PremierLeagueData2022)
    })

}