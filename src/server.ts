import express, { Request, Response } from "express"
import dotenv from "dotenv"

dotenv.config()

const app = express()
const port = process.env.PORT

// Initial hello world route
app.get("/", (req: Request, res: Response) => {
  return res.status(200).json({
    message: "Hello world from kubernetes"
  })
})

// create a route that sums 2 numbers via query params
app.get("/sum", (req: Request, res: Response) => {
  const { a, b } = req.query
  const sum = Number(a) + Number(b)
  return res.status(200).json({
    result: sum,
    message: `Sum of ${a} and ${b} is ${sum}`
  })
})

// create a route that subtraction 2 numbers via query params
app.get("/sub", (req: Request, res: Response) => {
  const { a, b } = req.query
  const sub = Number(a) - Number(b)
  return res.status(200).json({
    result: sub,
    message: `Subtraction of ${a} and ${b} is ${sub}`
  })
})

// create a route that multiplication 2 numbers via query params
app.get("/mult", (req: Request, res: Response) => {
  const { a, b } = req.query
  const mult = Number(a) * Number(b)
  return res.status(200).json({
    result: mult,
    message: `Multiplication of ${a} and ${b} is ${mult}`
  })
})

// create a route that division 2 numbers via query params
app.get("/div", (req: Request, res: Response) => {
  const { a, b } = req.query
  const div = Number(a) / Number(b)
  return res.status(200).json({
    result: div,
    message: `Division of ${a} and ${b} is ${div}`
  })
})

// create a route that returns the string from query params
app.get("/echo", (req: Request, res: Response) => {
  const { str } = req.query
  res.send(`<H1 style="text-align:center;background: blue"> ${str} </H1>`)
})

// create a route that creates a file with the string from query params
app.get("/writeFile", async (req: Request, res: Response) => {
  const { str } = req.query
  const fs = require("fs")
  const fileName = "pvc/message.txt"
  let fileContent
  try {
    // try to read file
    fileContent = await fs.promises.readFile(fileName)
  } catch (error) {
    // create empty file, because it wasn't found
    await fs.promises.writeFile(fileName, '')
    fileContent = ''
  }
  const result = fileContent + str
  await fs.promises.writeFile(fileName, str, {flag: 'a+'})

  res.send(`<H1>File updated with content: ${result} </H1>`)
})

app.listen(port, () => {
  console.info(`⚡️[server]: Server is running at http://localhost:${port}`)
})