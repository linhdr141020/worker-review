import Koa from "koa";
import bodyParser from "koa-bodyparser";
import cors from "@koa/cors";
import Router from "koa-router";
const PORT = parseInt(process.env.PORT || 3000, 10);
const app = new Koa();
app.use(bodyParser());
var corsOptions = {
    origin: "*",
};
app.use(cors(corsOptions));
const router = new Router();
router.get("/healthz", async (ctx) => {
    console.log('healthzzzzzzzz');
    ctx.body = `Ok - EXTENSION_UUID: ${process.env.THEME_APP_EXTENSION_UUID} - nodejs version: ${process.version}`;
    ctx.status = 200;
});

app.use(router.allowedMethods());
app.use(router.routes());
app.listen(PORT, () => {
    console.log(`Listenning on port ${PORT}`)
});