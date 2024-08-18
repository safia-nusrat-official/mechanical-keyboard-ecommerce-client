![KeyWizards](./public/favicon.jpg)

# KeyWizards ⌨️

Welcome to KeyWizards, your ultimate destination for mechanical keyboards! This e-commerce platform is designed to provide an exceptional browsing experience with an intuitive interface, a robust cart system, and efficient product management.


[![Live Preview Link](https://img.shields.io/badge/Live_Preview_Link-blue)](https://mechanical-keyboard-ecommerce-client.vercel.app/)
[![Live Server Link](https://img.shields.io/badge/Live_Server_Link-red)](https://mechanical-keyboard-ecommerce-server.vercel.app/)
[![Server Repository Link](https://img.shields.io/badge/Server_Repository_Link-yellow)](https://github.com/safia-nusrat-official/mechanical-keyboard-ecommerce-server)


## Table of Contents 📝

- [**Features**](#features)
- [**Getting Started**](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [**Usage**](#usage)
- [**API Documentation**](#api-documentation)
- [**Technologies Used**](#technologies-used)
- [**Contact**](#contact)
  
## Features

- Easy Product Browsing: Effortlessly navigate through a wide range of mechanical keyboards with smooth filtering and sorting options.
- Smooth Cart System: Add, remove, and manage items in your cart with ease, ensuring a seamless shopping experience.
- Detailed Product Pages: View comprehensive details, high-quality images, and specifications for each product.
- Fast Search: Quickly find products using our optimized search functionality.
- Page Refresh Warnings: Avoid losing your cart data with in-browser warnings about unsaved changes.
- Secure Payment via Stripe: Complete transactions safely with Stripe's secure payment processing.
- Product Dashboard: Administrative control panel to manage, create, update, and delete products.
- Responsive Design: Fully functional on both mobile and desktop devices for a consistent experience across platforms.

## Getting Started 🚀
### Prerequisites 📋
Before you begin, please ensure you have the following dependencies installed:
```bash
Node.js (v20.11.0 or later)
npm (v20.11.0 or later)
```
### Installation 🛠️
1. Clone the repository:
 ```bash
 git clone https://github.com/safia-nusrat-official/mechanical-keyboard-ecommerce-client.git
 ```
2. Move to *mechanical-keyboard-ecommerce-client* :
```bash
cd mechanical-keyboard-ecommerce-client
```
3. Install the depecdencies:
```bash
 npm install
 ```

_n.b: Make sure to read the server repository readme to install and configure the backend beforehand if you want to run the frontend on local server!_

### Configuration ⚙️
1. In the root directory of your project, create a .env.local file and add the following configuration variables:
```env
VITE_IMGBB_API=4bfb6e15a3a0f1ed16af04cbe55b04b9
VITE_STRIPE_PK=pk_test_51OX1c0EwhDuP55qLqSOaLz8t6G4L2qGcTJ40gEyOo3UskSR9FTE0wmEVNTEUStxeoC72qpg8IrNIwSuEsMbQObAi00M2UHTsZ1
VITE_SERVER_URL=`https://mechanical-keyboard-ecommerce-server.vercel.app`
```
_N.B: If you want to run it locally, instead of `https://mechanical-keyboard-ecommerce-server.vercel.app`, set `VITE_SERVER_URL` to where the local server is being hosted from._

```env
VITE_SERVER_URL=`https://localhost:5000`
```

## Usage 📖
1. To run the development server, hit:
```bash
npm run dev
```

The application should now be running on http://localhost:5173 or http://localhost:5174


## API Documentation 🌐
The API Documentation can be found in the [Server Side Repository](https://github.com/safia-nusrat-official/mechanical-keyboard-ecommerce-server)


## Technologies Used 💻
- Web-framework: **[Express.Js](https://expressjs.com/)**
- Programming Language: **[Typescript](https://www.typescriptlang.org/)**
- Object Data Modeling: **[Mongoose](https://mongoosejs.com/)**
- Database: **[MongoDB](https://www.mongodb.com/)**
- Validation Library: **[Zod](https://zod.dev/)**
- Formatters: **[ESLint](https://eslint.org/)**, **[Prettier](https://prettier.io/)**
- Library used: **[React](https://react.dev/)**
- State Mangament via: **[Redux](https://redux.js.org/)**
- Build Tool: **[Vite](https://vitejs.dev/)**
- Programming Language: **[TypeScript](https://www.typescriptlang.org/)**
- CSS Framework:**[Tailwind CSS](https://tailwindcss.com/)**
- Component Library: **[ShadCN](https://ui.shadcn.com/)**
- React UI library:**[Ant-Design](https://ant.design/)**
- Others:**[AOS](https://michalsnik.github.io/), [sonner](https://sonner.emilkowal.ski/), [moment](https://momentjs.com/)**
  
## Contact 📞
For any enquires or issues related installation, please reach out to us at _safia.nusrat.official@gmail.com_. We welcome yor feedback and are here to guide you through your troubles and clean up any confusions. Thank you 😊!

_[Safia Nusrat](https://github.com/safia-nusrat-official)_
