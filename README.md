# 🚀 Twitch Clone

A **feature-rich** Twitch clone built with modern web technologies! 🎮✨ This project replicates core functionalities of Twitch, incorporating live streaming, real-time chat, authentication, and much more. 🌟

## 🛠️ Tech Stack

Here are the technologies that power this Twitch clone:

- **Backend:**

  - 🟢 [Nest.js](https://nestjs.com/) - A progressive Node.js framework.
  - ⚙️ [GraphQL](https://graphql.org/) - API query language for flexibility.
  - 💾 [Prisma](https://www.prisma.io/) - Modern ORM for database access.

- **Frontend:**

  - ⚡ [Next.js 15](https://nextjs.org/) - The React framework for production.
  - 🔄 [Apollo Client](https://www.apollographql.com/docs/react/) - State management for GraphQL.
  - 🌐 [Next Intl](https://next-intl-docs.vercel.app/) - Internationalization support.

- **Authentication:**

  - 🔐 OTP Authentication for secure login.

- **Real-Time Streaming:**

  - 📹 [LiveKit](https://livekit.io/) - Scalable WebRTC for real-time communications.

- **Payments:**

  - 💳 [Stripe](https://stripe.com/) - Secure and seamless payment integration.

- **Validation:**

  - ✅ [Zod](https://zod.dev/) - Schema declaration and validation.

- **Caching:**
- 🏎️ [Redis](https://redis.io/) - Lightning-fast in-memory data store.

- **UI Components:**

  - 🎨 [Shadcn UI](https://ui.shadcn.dev/) - Accessible and reusable components.

- **State Management:**

  - 📊 [Zustand](https://zustand-demo.pmnd.rs/) - Simplified state management for React.

- **Bundler:**

  - ⚡ [Bun](https://bun.sh/) - Ultra-fast JavaScript runtime and bundler.

- **Messaging Integration:**
  - 📩 [Telegram Bot API](https://core.telegram.org/bots/api) - Integration for notifications and updates.

---

## 🌟 Features

- 🔴 Live Streaming and Real-Time Chat
- 🌍 Multi-Language Support with Translations
- 🔒 Secure OTP Authentication
- 💸 Stripe-Powered Payment Integration
- 🎛️ User-Friendly Dashboard and Controls
- 📚 Modular and Scalable Codebase
- ⚡ Ultra-Fast Bundling with Bun
- 📩 Telegram Notifications for Updates and Alerts
- 🏎️ Enhanced Performance with Redis Caching

---

## 🛑 Prerequisites

Before you get started, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher) 🟢
- [Bun](https://bun.sh/) (optional, for faster builds) ⚡
- [Docker](https://www.docker.com/) (for database and LiveKit setup) 🐳
- A Stripe account 💳
- A Telegram Bot API key 📩
- LiveKit API keys ⚡

---

## 🚀 Getting Started

Follow these steps to set up the project locally:

### 1️⃣ Clone the Repository

```bash
$ git clone https://github.com/BernieTv/twitch-clone.git
$ cd twitch-clone
```

### 2️⃣ Install Dependencies

```bash
# cd to backend server
cd backend && yarn

# cd to frontend folder
$ cd frontend && bun install
```

### 3️⃣ Set Up Environment Variables

Create a `.env` file in frontend and backend folders and add the following:

```env
# for backend

NODE_ENV='development'

APPLICATION_PORT=4000
APPLICATION_URL='http://localhost:${APPLICATION_PORT}'
GRAPHQL_PREFIX='/graphql'
ALLOWED_ORIGIN='http://localhost:3000'

COOKIES_SECRET='secret'
SESSION_SECRET='secret'
SESSION_NAME='session'
SESSION_DOMAIN='localhost'
SESSION_MAX_AGE='30d'
SESSION_HTTP_ONLY=true
SESSION_SECURE=false
SESSION_FOLDER='sessions:'

POSTGRES_USER='root'
POSTGRES_PASSWORD='123456'
POSTGRES_HOST='localhost'
POSTGRES_PORT='5433'
POSTGRES_DATABASE='*'
POSTGRES_URI='postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DATABASE}'

REDIS_USER='default'
REDIS_PASSWORD='123456'
REDIS_HOST='localhost'
REDIS_PORT='6379'
REDIS_URI='redis://:${REDIS_PASSWORD}@${REDIS_HOST}:${REDIS_PORT}'

MAIL_HOST='*'
MAIL_PORT=*
MAIL_LOGIN='*t'
MAIL_PASSWORD='*'

S3_ENDPOINT='*'
S3_REGION='*'
S3_ACCESS_KEY_ID='*'
S3_SECRET_ACCESS_KEY='*'
S3_BUCKET_NAME='*'

LIVEKIT_API_URL='*'
LIVEKIT_API_KEY='*'
LIVEKIT_API_SECRET='*'

TELEGRAM_BOT_TOKEN='*'

STRIPE_SECRET_KEY='*'
STRIPE_WEBHOOK_SECRET=''

# for frontend

NEXT_PUBLIC_APP_URL='http://localhost:3000'

NEXT_PUBLIC_SERVER_URL='http://localhost:4000/graphql'
NEXT_PUBLIC_WEBSOCKET_URL='ws://localhost:4000/graphql'
NEXT_PUBLIC_MEDIA_URL='*'

NEXT_PUBLIC_LIVEKIT_WS_URL=''
```

### 4️⃣ Start the Services

Start the databases using Docker:

```bash
$ docker-compose up -d
```

### 5️⃣ Run the Development Server

```bash
# for backend
$ yarn run start:dev

# for frontend
$ bun run dev
```

---

## 📚 Documentation

- [Nest.js Documentation](https://docs.nestjs.com/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [GraphQL Documentation](https://graphql.org/learn/)
- [Stripe Documentation](https://stripe.com/docs)
- [Telegram Bot API Documentation](https://core.telegram.org/bots/api)
- [Redis Documentation](https://redis.io/docs)

---

## 📄 License

This project is licensed under the MIT License. 📝

---

## ✨ Demo

Check out the live demo here: [Twitch Clone Demo](https://twitch-clone-swart-kappa.vercel.app) 🎥
