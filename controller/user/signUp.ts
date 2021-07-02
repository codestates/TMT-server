import { Request, Response } from "express";
import bcryptjs from "bcryptjs";
import userModel from "../../database/user";

export const signUp = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, password } = req.body;
    let userInfo = await userModel.findOne({
      email: email,
    });
    if (userInfo) {
      res.status(409).send({
        message: "이미 사용중인 email입니다!",
      });
    } else {
      await bcryptjs.hash(password, 10, (err, hash) => {
        if (err) {
          return res.status(401).send({
            message: "Error has occured",
            error: err,
          });
        } else {
          let user = new userModel({
            name,
            email,
            password: hash,
          });

          return user
            .save()
            .then((newUser) => {
              return res.status(201).send({
                message: "회원가입이 성공적으로 완료되었습니다!",
                name: newUser.name,
                email: newUser.email,
                password: newUser.password,
              });
            })
            .catch((err) => {
              res.status(500).json({
                message: err,
              });
            });
        }
      });
    }
  } catch (err) {
    res.end();
  }
};
