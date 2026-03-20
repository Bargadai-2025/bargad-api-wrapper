import CreateApiUser from "../model/apicreation.model.js";

export async function createApiUser(req, res) {
  try {
    const data = req.body;
    const newUser = await CreateApiUser.create(data);
    res.status(201).json({
      message: "api key created successfully",
      status: 201,
      user: newUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating user",
      status: 500,
      error: error.message,
    });
  }
}

export async function getAllApiUsers(req, res) {
  try {
    const users = await CreateApiUser.find();
    res.status(200).json({
      message: "Users retrieved successfully",
      status: 200,
      users: users,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving users",
      status: 500,
      error: error.message,
    });
  }
}

export async function deleteApiUser(req, res) {
  try {
    const userId = req.params.id;
    const deletedUser = await CreateApiUser.findByIdAndDelete(userId);
    if (deletedUser) {
      res.status(200).json({
        message: "Customer Deleted successfully",
        status: 200,
        users: deletedUser,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error deleting user",
      status: 500,
      error: error.message,
    });
  }
}

export async function getParticularUser(req, res) {
  try {
    const id = req.params.id;
    const finduser = await CreateApiUser.findById(id);
    if (finduser) {
      res.status(201).json({
        message: "user data : ",
        status: 200,
        user: finduser,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "error retrieving user",
      status: 500,
      error: error.message,
    });
  }
}

export async function updateParticularData(req, res) {
  try {
    let id = req.params.id;
    const data = req.body;

    const updateuser = await CreateApiUser.findByIdAndUpdate(id, data);
    if (updateuser) {
      res.status(201).json({
        message: "user updated succesfully ",
        status: 200,
        user: updateuser,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "error Updating user",
      status: 500,
      error: error.message,
    });
  }
}
