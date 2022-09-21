export default function(req, res){

    if(req.session.auth){

        res.redirect('/play');

        return;
    }
    
    res.send({ message : req.session.message });
}