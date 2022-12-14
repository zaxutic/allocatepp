import express, { Request, Response } from 'express';
import { connectToDB, db } from './db';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/course/:id', (req: Request, res: Response) => {
  const courseId = req.params.id;
  console.log(courseId);

  db.courses
    ?.collection(courseId)
    .find()
    .toArray((err, result) => res.json(result));
});

app.get('/courses', (req: Request, res: Response) => {
  return res.send({ courses: db.coursesList });
});

connectToDB().then(() => {
  app.listen(3001);
});
