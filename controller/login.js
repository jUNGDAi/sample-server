const express = require('express');
const router = express.Router();
const mysqldb = require('../shared/mysql-db');

router.post('/doLogin', function (req, res) {
    let dat = req.body;
    let sql = `
    select 
        user_code as "userCode"
        , user_first_name as "userName"
        , user_last_name as "userLastName"
        , user_email as "userEmail"
    from sc_user 
    where (user_code = '${dat.userCode}' or user_email = '${dat.userCode}') 
        and user_pwd = '${dat.userPwd}' 
        and user_active = 'Y'
    `;

    mysqldb.query(sql, function (err, result) {
        if (err)
            res.json(err);
        else
            if (result.length > 0)
                res.json({
                    success: true,
                    auth_token: "xxxxxxxxx",
                    userName: result[0].userName,
                    message: `Hi ${result[0].userFirstName}`

                });
            else
                res.json({
                    success: false,
                    message : "Login fail"

                });
    });
});

module.exports = router;