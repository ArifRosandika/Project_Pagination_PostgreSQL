📌 Search & Pagination Project

This project is a full-stack web application that demonstrates efficient searching and pagination functionality using PostgreSQL, Express, Prisma, React, and TailwindCSS.

The application provides a backend API for data management and a responsive frontend interface to display and interact with paginated data.

🛠️ Tech Stack

--- Backend ---

- Node.js with Express – REST API server

- Prisma ORM – Database schema & query management

- PostgreSQL – Relational database

- Faker.js – Data seeding for testing

- Dotenv – Environment variable management

- CORS – Cross-origin resource sharing

--- Frontend ---

- React 19 – UI framework

- React Router DOM – Client-side routing

- React Paginate – Pagination UI component

- Axios – HTTP requests

- TailwindCSS – Utility-first CSS framework

- Vite – Next-generation frontend tooling

📂 Project Structure
Project
│
├── Backend
│   ├── client
│   │   └── prismaClient.js
│   ├── controllers
│   │   └── personalCon.js
│   ├── middleware
│   │   └── indexMid.js
│   ├── prisma
│   │   ├── migrations
│   │   ├── schema.prisma
│   │   └── seed.js
│   ├── routes
│   │   ├── indexRot.js
│   │   └── personalRot.js
│   ├── .env
│   ├── config.json
│   └── eslint.config.js
│
├── Frontend
│   ├── public
│   ├── src
│   │   ├── assets
│   │   ├── component
│   │   │   └── listUser.jsx
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .env
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
└── README.md

⚙️ Installation & Setup
1. Clone the repository
- git clone https://github.com/ArifRosandika/Search-Pagination-Project.git
- cd Search-Pagination-Project

2. Backend Setup
- cd Backend
- npm install


- Configure .env file:
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/DATABASE_NAME"
PORT=5000


- Run Prisma migration & seed:

- npx prisma migrate dev
- node prisma/seed.js


- Start backend:
npm run dev

3. Frontend Setup
- cd Frontend
- npm install


- Start frontend:
npm run dev

🔍 Features

Search functionality for filtering user data

Pagination support with server-side handling

REST API integration with PostgreSQL via Prisma

Responsive design using TailwindCSS

Modular structure for scalability

📌 Scripts

--- Backend ---

- npm run dev → Start development server

- npx prisma studio → Open Prisma GUI

- node prisma/seed.js → Seed database

--- Frontend ---

- npm run dev → Start development server

- npm run build → Build production bundle

- npm run lint → Run ESLint

🤝 Contribution

Contributions, issues, and feature requests are welcome!
Feel free to open a PR or issue.

📜 License

This project is licensed under the MIT License.
