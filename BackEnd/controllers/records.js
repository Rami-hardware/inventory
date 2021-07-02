import { getRecords } from "../models/recordModels.js";

export const showProducts = (req, res) => {
    getRecords((err, results) => {
        if (err) throw err
        res.json(results);
        console.log(results)
        }
    );
}