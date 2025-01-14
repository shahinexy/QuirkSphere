import express, { Application, Request, Response } from "express";
import cors from "cors";
import { BlogRouters } from "./app/Modules/Blog/blog.route";
import GlobalErrorHandler from "./app/middleware/globalErrorHandler";
import NotFound from "./app/middleware/notFound";

const app: Application = express();

//perser
app.use(express.json());
app.use(cors());

app.use("/api/blogs", BlogRouters);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// Global error handler
app.use(GlobalErrorHandler);

// not found
app.use(NotFound);

export default app;
