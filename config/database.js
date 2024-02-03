import mongoose from 'mongoose'

const database = () => {
  mongoose
    .connect(
      'mongodb+srv://super047240:LSJsv3l2HsuUfMK1@mern-blog.o5uxkty.mongodb.net/MERNBLOG'
    )
    .then(() => {
      console.log('mongodb connect successfully')
    })
    .catch((error) => {
      console.log('db connection issues')
      console.error(error)
      process.exit(1)
    })
}

//  module.exports = database

export default database
