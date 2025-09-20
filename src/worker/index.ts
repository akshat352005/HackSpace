import { Hono } from "hono";

const app = new Hono<{ Bindings: any }>();

app.get("/", (c) => c.text("Hello from Hono!"));

export default app;
