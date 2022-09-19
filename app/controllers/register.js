import { insertOne } from "../models/User.js";
import bcrypt from "bcrypt";

export default async function (req, res) {

    const { firstname, lastname, email, password, passwordCheck } = req.body;

    let { message } = req.session;

    if (firstname && lastname && email && password && passwordCheck) {

        if (password === passwordCheck) {
            const hashPass = await bcrypt.hash(password, 10);

            let userObj = {
              firstName: firstname,
              lastName: lastname,
              email: email,
              password: hashPass,
            };

            const newUser = await insertOne(userObj);
        } else {
            message = "Veuillez entrer le même mot de passe"
        }
    } else {
        message = "Veuillez renseigner tous les champs"
    }

  res.render("register", { message });
}
