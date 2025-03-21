
import { prisma } from "config/client";
import getConnection from "config/database";

const handleCreateUser = async (
    fullName: string,
    email: string,
    address: string) => {

    // insert into DB

    const newUser = await prisma.user.create({
        data: {
            name: fullName,
            email: email,
            address: address
        }
    });

    return newUser;

}

const getAllUsers = async () => {
    const users = await prisma.user.findMany();
    return users;

}

const handleDelUser = async (id: string) => {

    const delUser = await prisma.user.delete({
        where: {
            id: +id
        }
    })

    return delUser;

}

const getUserById = async (id: string) => {

    // insert into DB
    const user = await prisma.user.findUnique({
        where: {
            id: +id
        },
    });

    return user;

}

const updateUserById = async (
    id: string,
    fullName: string,
    email: string,
    address: string
) => {
    const updateUser = await prisma.user.update({
        where: {
            id: +id
        },
        data: {
            name: fullName,
            email: email,
            address: address
        },
    });

    return updateUser;

}

export { handleCreateUser, getAllUsers, handleDelUser, getUserById, updateUserById }