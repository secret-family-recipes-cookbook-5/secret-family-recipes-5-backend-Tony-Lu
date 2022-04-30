const router = require("express").Router()

// endpoints here
router.get('/', (req, res) => {
    res.send("Hello from auth router")
})

module.exports = router