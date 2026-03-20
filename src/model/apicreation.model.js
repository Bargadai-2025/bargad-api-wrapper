import mongoose from "mongoose";
var validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const CreateModel = new mongoose.Schema({
  spokeName: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: [validateEmail, "Please fill a valid email address"],
  },
  phoneNumber: {
    type: Number,
    required: true,
    maxLength: 10,
    minLength: 10,
  },
  gstNumber: {
    type: String,
    required: true,
  },
  displayName: {
    type: String,
    required: true,
  },
  addressL1: {
    type: String,
    required: true,
  },
  addressL2: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  pincode: {
    type: Number,
    required: true,
    maxLength: 6,
    minLength: 6,
  },
  generatedApiKey: {
    type: String,
    required: true,
  },
});

const CreateApiUser =
  mongoose.models.CreateApiUser || mongoose.model("CreateApiUser", CreateModel);
export default CreateApiUser;
