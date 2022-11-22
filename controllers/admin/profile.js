const Profile = require( "../../models/profile.js");
const {body,validationResult } = require("express-validator") 

exports.getProfile = async (req, res) => {
  try {
    const profileList = await Profile.find({ approved: 0 });

    res.status(200).json(profileList);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.showProfile = async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.id);
    if (profile) {
      res.send(profile);
    } else {
      res.status(404).send({ message: "Product Not Found" });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.deleteProfile = async (req, res) => {
  const { id } = req.params;

  await Profile.findByIdAndRemove(id);

  const profileList = await Profile.find({ approved: 0 });

  res.status(200).json(profileList);
};

exports.approveProfile = async (req, res) => {
  const { id } = req.params;

  const approved = { approved: 1 };

  await Profile.findByIdAndUpdate(id, approved, { new: true });

  const profileList = await Profile.find({ approved: 0 });

  res.status(200).json(profileList);
};

exports.updateProfile = async (req, res) => {
  const { id } = req.params;

  const { list, familyName } = req.body;

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const newProfile = new Profile({
    profile: list,
    familyName: familyName,
    _id: id,
  });

  try {
    await Profile.findByIdAndUpdate(id, newProfile, { new: true });

    res.status(201).json(newProfile);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

exports.approvedProfileList = async (req, res) => {
  try {
    const profileList = await Profile.find({ approved: 1 });

    res.status(200).json(profileList);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
