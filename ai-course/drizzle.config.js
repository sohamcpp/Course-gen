/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./configs/schema.jsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: process.env.NEXT_PUBLIC_DB_CONNECTION_STRING || 
      'postgresql://course-gen_owner:kXeo3m7dROBz@ep-ancient-salad-a1fhgypd.ap-southeast-1.aws.neon.tech/AI-Course-Generator?sslmode=require',
    }
  };