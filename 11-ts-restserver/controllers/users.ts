import { Request, Response } from "express";
import User from "../models/user";

export const getUsers = async( req: Request, res: Response ) => {

  const users = await User.findAll();

  res.json({ users })
}

export const getUser = async( req: Request, res: Response ) => {
  
  const { id } = req.params;
  
  const user = await User.findByPk( id );
  
  if( !user ) {
    res.status(404).json({
      message: `The user with id ${id} doesn't exist`
    })
  } else {
    res.json( user)
  }
}

export const postUser = ( req: Request, res: Response ) => {
  const { body } = req;
  res.json({
    message: 'postUser',
    body
  })
}

export const putUser = ( req: Request, res: Response ) => {
  const { body } = req
  const { id } = req.params

  res.json({
    message: 'putUser',
    body,
    id
  })
}

export const deleteUser = ( req: Request, res: Response ) => {
  const { id } = req.params

  res.json({
    message: 'deleteUser',
    id
  })
}
