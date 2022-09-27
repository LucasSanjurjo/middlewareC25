let admins = ["Ada", "Greta", "Vim", "Tim"];

function adminMiddle (req, res, next){
    let user = req.query.user;

    if(user){
        admins.forEach((admin) => {
            if (admin == user){
                next();
            }
        });
        res.send('No tienes los privilegios para ingresar');

    } else {
        res.send('No tienes los privilegios para ingresar');
    }


    next();
}; 

module.exports = adminMiddle;