const Koa = require('koa');
const next = require('next');
const Router = require('koa-router');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
.then(() => {
  const server = new Koa();
  const router = new Router();

  router.get('/render', async ctx => {
    await app.render(ctx.req, ctx.res, '/render', ctx.query);
    ctx.respond = false;
  });

  router.get('*', async ctx => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200;
    await next();
  });

  server.use(router.routes());

  server.listen(process.env.PORT || 5000, (err) => {
    if (err) throw err;
    console.log('apex running');
  });
})
