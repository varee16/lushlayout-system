const express = require("express");
const fs = require("fs");
const router = express.Router();
const path = require("path")

router.get("/", (req,res) => {
    if(req.query.key !== process.env.ADMIN_SECRET)
        return res.send("Unauthorized");

    const ordersPath = path.join(__dirname, "../data/orders.json");

    if(!fs.existsSync(ordersPath)) {
        return res.json({success: true, orders: []})
    }

    const orders = JSON.parse(fs.readFileSync(ordersPath, "utf-8"));


    res.json({
        success: true,
        orders
    })
});

module.exports = router;