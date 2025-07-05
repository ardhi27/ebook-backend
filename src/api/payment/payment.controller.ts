import { Request, Response, Router } from "express";
import { constants, createResponse } from "../../shared/utils";
import authMiddleware from "../../shared/middlewares/auth.middleware";
import { BookService } from "../books/books.service";
import BooksDto from "../books/books.dto";

export class PaymentController {
  private path: string;
  public router: Router;
  private booksService: BookService;

  constructor() {
    this.path = "/api/payment";
    this.router = Router();
    this.booksService = new BookService();
    this.registerRoutes();
  }

  private registerRoutes() {
    this.router.get(this.path + "/simulate/:id", this.createPayment);
  }

  private createPayment = async (req: Request, res: Response): Promise<any> => {
    let transactionResponse;

    const booksId = Number(req.params.id);
    const book = await this.booksService.viewBooksById(booksId);
    const orderId = `BOOK-${booksId}-${Date.now()}-${Math.random()
      .toString(36)
      .substring(2, 18)}`;

    const parameter = {
      transaction_details: {
        order_id: orderId,
        gross_amount: book.booksPrice,
      },
      credit_card: {
        secure: true,
      },
      callbacks: {
        finish: "https://523a-103-47-133-134.ngrok-free.app/detail/success",
      },
    };
    console.log(book);

    snap.createTransaction(parameter).then((transaction: any) => {
      // let transactionToken = transaction.token;
      console.log(transaction);
      transactionResponse = transaction;
      return res.status(200).json(
        createResponse(constants.SUCCESS_MESSAGE, {
          token: transaction.token,
          redirect_url: transaction.redirect_url,
        })
      );
    });
  };
}

const midtransClient = require("midtrans-client");
let snap = new midtransClient.Snap({
  isProduction: false,
  serverKey: process.env.SERVER_KEY,
});

// let parameter = {
//   transaction_details: {
//     order_id: "sofyan-123",
//     gross_amount: 10000,
//   },
//   credit_card: {
//     secure: true,
//   },
//   customer_details: {
//     booksId: "budi",
//     booksName: "pratama",
//   },
// };
