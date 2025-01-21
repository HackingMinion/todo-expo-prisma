# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.


# Prisma
## Migrations

Whenever you update your prisma schema , you will have to update your database schema using either commands npx prisma db push and npx prisma migrate dev serve different purposes in managing your database schema with Prisma. Here’s a breakdown of when and why to use each:

`npx prisma migrate dev`
- Purpose: This command generates and applies a new migration based on your Prisma schema changes. It creates migration files that keep a history of changes.
- Use Case: Use this when you want to maintain a record of database changes, which is essential for production environments or when working in teams. It allows for version control of your database schema.
- Benefits: This command also includes checks for applying migrations in a controlled manner, ensuring data integrity.

`npx prisma db push`
- Purpose: This command is used to push your current Prisma schema to the database directly. It applies any changes you've made to your schema without creating migration files.
- Use Case: It’s particularly useful during the development phase when you want to quickly sync your database schema with your Prisma schema without worrying about migration history.
- Caution: It can overwrite data if your schema changes affect existing tables or columns, so it’s best for early-stage development or prototyping.

### Seeding

Add seed data

```bash
npx tsx .\scripts\seed-data.ts
```
