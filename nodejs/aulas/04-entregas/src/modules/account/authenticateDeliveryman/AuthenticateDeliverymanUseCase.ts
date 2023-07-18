import { prisma } from "../../../database/prismaClient";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

interface IAuthenticateDeliveryman {
  username: string;
  password: string;
}

export class AthenticateDeliverymanUseCase {
  async execute({ username, password }: IAuthenticateDeliveryman) {

    const deliveryman = await prisma.deliveryman.findFirst({
      where: {
        username,
      }
    })

    if (!deliveryman) {
      throw new Error("Username or password invalid!");
    }

    const passwordMatch = await compare(password, deliveryman.password);

    if (!passwordMatch) {
      throw new Error("Username or password invalid!");
    }

    const token = sign({username}, "e10adc3949ba59abbe56e057f20f993e", {
      subject: deliveryman.id,
      expiresIn: "1d"
    })

    return token;
    
  }
}