import * as Express from "express";
import * as BodyParser from "body-parser";
import * as Cors from "cors";
import { MainController } from "./routingControllers/MainController";
import { DonationController } from "./routingControllers/DonationController";
import { Application } from "express";

class App {
  public app: Application;

  constructor() {
    this.app = Express();
    this.config();
  }

  private config(): void {
    this.app.use(Cors());
    // support application/json
    this.app.use(BodyParser.json());
    //support application/x-www-form-urlencoded post data
    this.app.use(BodyParser.urlencoded({ extended: false }));
    this.app.use("/", new MainController().getRouter());
    this.app.use(new DonationController().getRouter());
  }
}
export default new App().app;
