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
    });
  } else {
    res.json( user);
  }
}

export const postUser = async( req: Request, res: Response ) => {

  const { body } = req;

  try {

    const emailExists = await User.findOne({
      where: {
        email: body.email
      }
    });

    if( emailExists ) {
      return res.status(400).json({
        message: `The email ${body.email} already exists`
      })
    }

    const user = User.build( body );
    await user.save();

    res.status(201).json( user );
    
  } catch ( error ) {
    console.log(error)
    res.status(500).json({
      message: 'Talk to the admin',
    })
    
  }
}

export const putUser = async( req: Request, res: Response ) => {

  const { body } = req
  const { id } = req.params
  
  try {

    const user = await User.findByPk( id );

    if( !user ) {
      return res.status(404).json({
        message: `User with id ${id} doesn't exist`
      })
    }

    await user.update( body )

    res.status(200).json( user );
      
    } catch ( error ) {
      console.log(error)
      res.status(500).json({
        message: 'Talk to the admin',
      })
    }
}

export const deleteUser = ( req: Request, res: Response ) => {
  const { id } = req.params

  res.json({
    message: 'deleteUser',
    id
  })
}
