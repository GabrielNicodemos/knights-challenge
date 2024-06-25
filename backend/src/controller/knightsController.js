import Error404 from "../error/Error404.js";
import {knights} from "../models/index.js";

class KnightsController {

  static getKnights = async (req, res, next) => {
    try {
      const knights_found = await knights.find({});
      const get_knights = knights_transformed(knights_found);

      res.status(200).json(get_knights);

    } catch (erro) {
      next(erro);
    }
  };

  static getKnightsById = async (req, res, next) => {
    try {
      const id = req.params.id;

      const knight_found = await knights.findById(id);
      if (knight_found !== null) {
        res.status(200).send(knight_found);
      } else {
        next(new Error404("Knight not found"));
      }

    } catch (erro) {
      next(erro);
    }
  };

  static addKnight = async (req, res, next) => {
    try {
      let knight = new knights(req.body);

      const knightCreated = await knight.save();
      res.status(201).send(knightCreated.toJSON());

    } catch (erro) {
      next(erro);
    }
  };

  static updateKnight = async (req, res, next) => {
    try {

      const id = req.params.id;
      const { nickname } = req.body;

      if (!nickname) {
        return res.status(400).send({ message: "Nickname is required" });
      }

      const knightUpdate = await knights.findByIdAndUpdate(
        id,
        { $set: { nickname: nickname } },
        { new: true }
      );


      if (knightUpdate !== null) {
        res.status(200).send({message: "Nickname updated successfully"});
      } else {
        next(new Error404("Knight not found"));
      }

    } catch (erro) {
      next(erro);
    }
  };

  static deleteKnight = async (req, res, next) => {
    try {
      const id = req.params.id;

      const knightUpdate = await knights.findByIdAndUpdate(
        id,
        { $set: { hero: true } },
        { new: true }
      );

      if (knightUpdate !== null) {
        res.status(200).send({message: "Nickname updated successfully"});
      } else {
        next(new Error404("Knight not found"));
      }
    } catch (erro) {
      next(erro);
    }

  };

  static getLKnightHeros = async (req, res, next) => {
    try {
      let get_knights = [];
      const query = req.query;

      const hasHeroesKey = "heroes" in query;
      if (hasHeroesKey) {
        const knights_found = await knights.find({"hero": true});
        get_knights = knights_transformed(knights_found);
      }

      res.status(200).send(get_knights);
    } catch (erro) {
      next(erro);
    }
  };
}

function getModifier(value) {
  if (value >= 0 && value <= 8) return -2;
  if (value >= 9 && value <= 10) return -1;
  if (value >= 11 && value <= 12) return 0;
  if (value >= 13 && value <= 15) return 1;
  if (value >= 16 && value <= 18) return 2;
  if (value >= 19 && value <= 20) return 3;
  return 0;
}

function getAttack(knight) {
  const keyAttributeValue = knight.attributes[knight.keyAttribute];
  const keyAttributeModifier = getModifier(keyAttributeValue);

  const equippedWeapon = knight.weapons.find(weapon => weapon.equipped);
  const equippedWeaponMod = equippedWeapon ? equippedWeapon.mod : 0;
  return 10 + keyAttributeModifier + equippedWeaponMod;
}

function getExp(age) {
  let exp = 0;
  if (age && age >= 7) {
    exp = Math.floor((age - 7) * Math.pow(22, 1.45));
  }

  return exp;
}

function knights_transformed(knights_found) {
  const knights_transformed = knights_found.map(knight => {
    let age = null;
    if (knight.birthday) {
      const birthDate = new Date(knight.birthday);
      if (!isNaN(birthDate)) {
        age = new Date().getFullYear() - birthDate.getFullYear();
      }
    }

    const attack = getAttack(knight);
    const exp = getExp(age);

    return {
      id: knight._id,
      name: knight.name,
      age: age,
      weapons: knight.weapons.length,
      keyAttribute: knight.keyAttribute,
      attack: attack ? attack : 0,
      experience: exp ? exp : 0,
      hero: knight.hero,
      nickname: knight.nickname,
    };
  });

  return knights_transformed;
}

export default KnightsController;