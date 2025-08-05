const path = require("path");
const fs = require("fs");
const Koa = require("koa");
const serve = require("koa-static");

const port = process.env.FUNICO_DEMO_PORT || 3000;
const app = new Koa();
const distDir = path.join(__dirname, "dist");
const indexPath = path.join(__dirname, "demo.html");

app.use(
  serve(distDir, {
    maxAge: 60 * 1000,
    index: "index.html",
    hidden: false,
    gzip: false,
  })
);

app.use(async (ctx, next) => {
  try {
    await next();
    if (ctx.status === 404) {
      ctx.status = 200;
      ctx.body = fs.readFileSync(indexPath);
      ctx.type = 'html';
    }
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = `<h1>Error ${ctx.status}</h1><p>${err.message}</p>`;
    ctx.app.emit("error", err, ctx);
  }
});

app.on("error", (err) => {
  console.error("服务器错误", err);
});

app.listen(port, "127.0.0.1", () => {
  console.log(`启动示例服务: http://127.0.0.1:${port}`);
  console.log(`目标文件目录：${distDir}`);
});
