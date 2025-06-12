# 🎪 EventSpace — Discover Perfect Venues for Your Events

A comprehensive full-stack web application for event venue booking, connecting venue owners with event planners to discover and book perfect spaces for weddings, conferences, parties, and corporate events.. Built using the **MERN stack principles** with cloud integrations and responsive design for a seamless user experience.

---

## ✨ Features

### 🗺️ Core Functionality

* **Browse Venues**: Explore diverse event spaces including wedding halls, conference centers, gardens, and banquet halls
* **Venue Details**: Comprehensive venue pages with capacity, amenities, pricing, location, and high-quality images
* **Interactive Maps**: Integrated **Mapbox** maps showing exact venue locations and nearby landmarks
* **Event Reviews**: Read authentic reviews from event organizers and share your venue experiences

### 👥 User Management

* **Secure Authentication**: Robust user registration and login system for venue owners and event planners
* **Session Management**: Stay logged in for 14 days with automatic logout for inactive sessions
* **Role-Based Access**: Protected actions ensuring only venue owners can manage their listings

### 🏢 Venue Management

* **List Your Venue**: Venue owners can create detailed listings with photos, amenities, and availability
* **Manage Listings**: Full control to edit pricing, update descriptions, and manage venue availability
* **Image Gallery**: Professional image upload and management via **Cloudinary** integration

### 🌟 Review & Rating System

* **Event Experiences**: Share detailed reviews about venue quality, service, and event success
* **Review Management**: Edit or delete your own reviews with proper user permissions
* **Rating System**: Help other event planners make informed venue decisions

### 📱 User Experience

* **Responsive Design**: Seamless experience across desktop, tablet, and mobile devices
* **Smart Search**: Find venues by location, capacity, type, and price range
* **Real-Time Feedback**: Instant flash messages for all user actions and confirmations
* **Secure Operations**: Protected routes and data validation for safe user interactions

### 🎯 Venue Filtering

* **Interactive venue type icons** on home page
* Click on venue type icons to view specific categories
* Seamless filtering experience for better venue discovery


---

## ⚙️ Tech Stack

### 💻 Frontend

* HTML5, CSS3, JavaScript
* **EJS** Templating for dynamic views
* **AJAX** for real-time search functionality

### 🌐 Backend

* Node.js + Express.js
* MongoDB (via Mongoose)

### 🔒 Auth & Security

* Passport.js + bcrypt
* Express-session & connect-flash
* Input validation via express-validator

### ☁️ Cloud & APIs

* **MongoDB Atlas** — Cloud database
* **Cloudinary** — Image hosting & optimization
* **Mapbox API** — Maps & geolocation
* **Render** — Deployment platform

---

## 🚀 Live Demo

🔗 [Check Out the Live App](https://eventspace-bs0r.onrender.com/listings)

---

## 🛠️ Getting Started

### 📋 Prerequisites

Ensure you have the following:

* 🟢 **Node.js** (v14+)
* 📦 **npm**
* 🛢️ **MongoDB** (or 🌩️ **MongoDB Atlas**)
* 🧬 **Git**

### ⚙️ Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/eventspace.git
   cd EventSpace
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Configure Environment**
   Create a `.env` file:

   ```env
   MONGODB_URL=your_mongo_url        # Local MongoDB connection string
   ATLASDB_URL=your_atlas_url        # MongoDB Atlas cloud database URL
   
   CLOUD_NAME=your_cloud_name        # Cloudinary - your cloud name
   CLOUD_API_KEY=your_api_key        # Cloudinary - API key
   CLOUD_API_SECRET=your_api_secret  # Cloudinary - API secret
   
   MAP_TOKEN=your_mapbox_token       # Mapbox - access token for interactive maps
   SECRET=your_secret_key            # Express-session - secret key for session management
   ```

4. **Run the App**

   ```bash
   node app.js       # or nodemon app.js (with nodemon)
   ```

Visit: `http://localhost:3000`

---

## 🗂️ Project Structure

```
eventspace/
├── controllers/
├── init/
├── models/
├── node_modules/
├── routes/
├── views/
├── public/
├── utils/
├── app.js
├── middleware.js
├── cloudConfig.js
├── schema.js
├── package.json
├── .gitignore
├── README.md
└── .env
```

---

## 🔮 Future Enhancements

* 🧲 **Advanced Search Filters** (💰 price range, 👥 capacity, 🎪 venue type)
* 📅 **Booking System** with Calendar Integration
* 💳 **Payment Gateway** Integration
* 📧 **Email Notifications** for bookings and confirmations
* 🛠️ **Admin Dashboard** for venue management
* 📱 **PWA / Mobile App** for on-the-go access

---

## 🙌 Contribution Guidelines

1. Fork the repo
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit: `git commit -m 'Add AmazingFeature'`
4. Push: `git push origin feature/AmazingFeature`
5. Open a pull request

---

## 🐞 Known Issues

* 🐢 **Image uploads** may be slow on the free **Cloudinary** tier
* 🌐 **Maps** may not load properly on unstable internet connections

---

## 💡 Acknowledgments

* [Express.js](https://expressjs.com/)
* [MongoDB](https://www.mongodb.com/)
* [Cloudinary](https://cloudinary.com/)
* [Mapbox](https://mapbox.com/)
* [Bootstrap](https://getbootstrap.com/)

---

## 👨‍💻 Author

**Harsh Gajera**
- GitHub: [@harshgajera101](https://github.com/harshgajera101)
- LinkedIn: [Harsh Gajera](https://linkedin.com/in/gajera-harsh)

---

## 📝 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

**Make Every Event Memorable! 🎉**

*EventSpace - Where perfect venues meet perfect events.*
