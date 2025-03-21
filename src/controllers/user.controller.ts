import { Request, Response } from "express";
import { getAllUsers, handleCreateUser, handleDelUser, getUserById, updateUserById } from "services/user.service";

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
const postCreateUser = async (req: Request, res: Response) => {
    // console.log(">>>check data: ", req.body);
    const { fullName, email, address } = req.body;

    // handle Create User
    const a = await handleCreateUser(fullName, email, address);

    return res.redirect('/');
}

const postDelUser = async (req: Request, res: Response) => {

    const { id } = req.params;

    // handle Delete User
    const a = await handleDelUser(id);

    return res.redirect('/');
}

const getViewUser = async (req: Request, res: Response) => {
    const { id } = req.params;

    // get User by Id
    const user = await getUserById(id);

    return res.render('viewUser', {
        id: id,
        user: user
    });
}

const postUpdateUser = async (req: Request, res: Response) => {

    const { id, fullName, email, address } = req.body;

    // Update User by Id
    const a = await updateUserById(id, fullName, email, address);

    return res.redirect('/');
}

export { getHomePage, getCreateUserPage, postCreateUser, postDelUser, getViewUser, postUpdateUser };