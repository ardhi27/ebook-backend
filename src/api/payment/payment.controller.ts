import { Request, Response, Router } from "express";
import { constants, createResponse } from "../../shared/utils";

export class PaymentController {
  private path: string;
  public router: Router;

  constructor() {
    this.path = "/api/payment";
    this.router = Router();
    this.registerRoutes();
  }

  private registerRoutes() {
    this.router.get(this.path + "/simulate", this.testPayment);
  }

  private testPayment = async (req: Request, res: Response): Promise<any> => {
    let transactionResponse;
    snap.createTransaction(parameter).then((transaction: any) => {
      let transactionToken = transaction.token;
      console.log(transaction);
      transactionResponse = transaction;
      return res
        .status(200)
        .json(
          createResponse(constants.SUCCESS_MESSAGE, transaction.redirect_url)
        );
    });
  };
}

const midtransClient = require("midtrans-client");
let snap = new midtransClient.Snap({
  isProduction: false,
  serverKey: process.env.SERVER_KEY,
});

let parameter = {
  transaction_details: {
    order_id: "sofyan-123",
    gross_amount: 10000,
  },
  credit_card: {
    secure: true,
  },
  customer_details: {
    first_name: "budi",
    last_name: "pratama",
    email: "budi.pra@example.com",
    phone: "08111222333",
  },
};
