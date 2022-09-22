import { find, updateOne, updatePastries, updateWonPastries } from "../models/User.js";

export default async function (req, res) {
  let message;
  let pastriesNb = 0;

  let { userId } = req.session;

  let user = await find(userId);

  let userPastries = user.pastries;

  const userWonPastries = user.wonPastries;

  let dices = [
    { id: 1, number: null },
    { id: 2, number: null },
    { id: 3, number: null },
    { id: 4, number: null },
    { id: 5, number: null },
  ];

  const launch = async (dices) => {
    dices.map((dice) => {
      dice.number = Math.floor(Math.random() * 6) + 1;
    });
    return dices;
  };

  const dicesLaunch = await launch(dices);
    
    const count = {};

    const dicesArr = [];
    dicesLaunch.forEach((dice) => dicesArr.push(dice.number));

    dicesArr.forEach((element) => {
      count[element] = (count[element] || 0) + 1;
    });

    const countArr = Object.values(count);

    if (countArr.filter((nb) => nb >= 2).length === 2) {
      pastriesNb += 1;
      message = "Vous avez 2 paires";
    } else if (countArr.filter((nb) => nb === 4).length === 1) {
      pastriesNb += 2;
      message = "Vous avez un carré";
    } else if (countArr.filter((nb) => nb === 5).length === 1) {
      pastriesNb += 3;
      message = "YAAAAAAAAAAAMS";
    } else {
      message = "Vous n'avez rien gagné. Rejouer.";
    }

    for (let i = 0; i < pastriesNb; i++) {
      const random = Math.floor(Math.random() * 36) + 1;
      switch (true) {
        case random <= 1:
          userPastries.map((pastry) => {
            if (pastry.order === 1) {
              pastry.number -= 1;
            }
          });
          await updatePastries(userId, userPastries);
          await updateWonPastries(
            userId,
            userPastries.find((pastry) => pastry.order === 1)
          );
          break;
        case random <= 3:
          userPastries.map((pastry) => {
            if (pastry.order === 2) {
              pastry.number -= 1;
            }
          });
          await updatePastries(userId, userPastries);
          await updateWonPastries(
            userId,
            userPastries.find((pastry) => pastry.order === 2)
          );
          break;
        case random <= 6:
          userPastries.map((pastry) => {
            if (pastry.order === 3) {
              pastry.number -= 1;
            }
          });
          await updatePastries(userId, userPastries);
          await updateWonPastries(
            userId,
            userPastries.find((pastry) => pastry.order === 3)
          );
          break;
        case random <= 10:
          userPastries.map((pastry) => {
            if (pastry.order === 4) {
              pastry.number -= 1;
            }
          });
          await updatePastries(userId, userPastries);
          await updateWonPastries(
            userId,
            userPastries.find((pastry) => pastry.order === 4)
          );
          break;
        case random <= 15:
          userPastries.map((pastry) => {
            if (pastry.order === 5) {
              pastry.number -= 1;
            }
          });
          await updatePastries(userId, userPastries);
          await updateWonPastries(
            userId,
            userPastries.find((pastry) => pastry.order === 5)
          );
          break;
        case random <= 21:
          userPastries.map((pastry) => {
            if (pastry.order === 6) {
              pastry.number -= 1;
            }
          });
          await updatePastries(userId, userPastries);
          await updateWonPastries(
            userId,
            userPastries.find((pastry) => pastry.order === 6)
          );
          break;
        case random <= 28:
          userPastries.map((pastry) => {
            if (pastry.order === 7) {
              pastry.number -= 1;
            }
          });
          await updatePastries(userId, userPastries);
          await updateWonPastries(
            userId,
            userPastries.find((pastry) => pastry.order === 7)
          );
          break;
        case random <= 36:
          userPastries.map((pastry) => {
            if (pastry.order === 8) {
              pastry.number -= 1;
            }
          });
          await updatePastries(userId, userPastries);
          await updateWonPastries(
            userId,
            userPastries.find((pastry) => pastry.order === 8)
          );
          break;
        default:
          break;
      }
    }
      user = await find(userId);
      await updateOne(userId, user.wonPastries.length);
      user = await find(userId);

      res.render("game", {
        dices: dicesLaunch,
        user:  user,
        message: message,
      });
}
