import User from '../../models/Authentication.js';

export async function signUp(req, res) {
  try {
    const user = await User.create(req.body);
    return res.status(201).json(user);
  } catch (e) {
    return res.status(500).json(e);
  }
}

export async function login(req, res, next) {
  try {
    const user = await User(req.body)
    res.status(200).json(user);
    return next();
  } catch (e) {
    return res.status(500).json(e);
  }
}