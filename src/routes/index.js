const { Router } = require('express');
const router = Router();






router.get('/test', (req, res) => {
    const data = {
        "name": "prueba",
        "website": "twitter.com"
    };
    res.json(data);
});

module.exports=router;

