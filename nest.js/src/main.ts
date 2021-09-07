import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import session from 'express-session';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 4001;

  const config = new DocumentBuilder()
    .setTitle('Slack')
    .setDescription('The Slack API description')
    .setVersion('1.0')
    .addCookieAuth('connect.sid')
    .addTag('Slack')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.use(cookieParser());
  app.use(
    session({
      resave: false,
      saveUninitialized: false,
      secret: process.env.COOKIE_SECRET,
      cookie: { httpOnly: true },
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());

  await app.listen(PORT);
  console.log('Listening on port :', PORT);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
