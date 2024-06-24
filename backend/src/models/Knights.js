import mongoose from "mongoose";
import moment from "moment";

const WeaponSchema = new mongoose.Schema({
  name: { type: String },
  mod: { type: Number, min: 0, default: 0 },
  attr: { type: String },
  equipped: { type: Boolean, default: true }
}, { _id: false });

const KnightsSchema = new mongoose.Schema(
  {
    id: {type: mongoose.Schema.Types.ObjectId },
    name: { type: String, required: true},
    nickname: { type: String },
    keyAttribute: { type: String },
    birthday: {
        type: String,
        validate: {
            validator: (value) => {
              const formats = ['DD/MM/YYYY', 'YYYY-MM-DD'];
              return moment(value, formats, true).isValid();
            },
            message: "The date format must be dd/MM/YYYY or yyyy-mm-dd"
          }
    },
    hero: {type: Boolean, default: false},
    weapons: [WeaponSchema],
    attributes: {
      strength: { type: Number, min: 0, default: 0 },
      dexterity: { type: Number, min: 0, default: 0 },
      constitution: { type: Number, min: 0, default: 0 },
      intelligence: { type: Number, min: 0, default: 0 },
      wisdom: { type: Number, min: 0, default: 0 },
      charisma: { type: Number, min: 0, default: 0 },
    },
  }
  , { versionKey: false });

const knights = mongoose.model("Knights", KnightsSchema);

export default knights;