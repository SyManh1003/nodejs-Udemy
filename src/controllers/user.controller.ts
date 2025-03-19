import { Request, Response } from "express";
import { getAllUsers, handleCreateUser } from "../services/user.service";

const getHomePage = async (req: Request, res: Response) => {
    // get Users
    const users = await getAllUsers();
    // console.log(">>>Check User: ", users);
    return res.render('home', {
        users: users
    });
}

const getCreateUserPage = (req: Request, res: Response) => {
    return res.render('createUser');
}
const postCreateUser = (req: Request, res: Response) => {
    console.log(">>>check data: ", req.body);
    const { fullName, email, address } = req.body;

    // handle Create User
    handleCreateUser(fullName, email, address);

    return res.redirect('/');
}

export { getHomePage, getCreateUserPage, postCreateUser };