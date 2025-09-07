import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [

  {
  email: "aditya.chowdhury@example.in",
  fullName: "Aditya Chowdhury",
  password: "123456",
  profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
},
{
  email: "siddharth.shetty@example.in",
  fullName: "Siddharth Shetty",
  password: "123456",
  profilePic: "https://randomuser.me/api/portraits/men/6.jpg",
},
{
  email: "rahul.pillai@example.in",
  fullName: "Rahul Pillai",
  password: "123456",
  profilePic: "https://randomuser.me/api/portraits/men/7.jpg",
},

{
  email: "sneha.rao@example.in",
  fullName: "Sneha Rao",
  password: "123456",
  profilePic: "https://randomuser.me/api/portraits/women/8.jpg",
},

// Male Users
{
  email: "arjun.mehra@example.in",
  fullName: "Arjun Mehra",
  password: "123456",
  profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
},
// Female Users
{
  email: "priya.singh@example.in",
  fullName: "Priya Singh",
  password: "123456",
  profilePic: "https://randomuser.me/api/portraits/women/1.jpg",
},
{
  email: "riya.sharma@example.in",
  fullName: "Riya Sharma",
  password: "123456",
  profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
},
{
  email: "ananya.verma@example.in",
  fullName: "Ananya Verma",
  password: "123456",
  profilePic: "https://randomuser.me/api/portraits/women/3.jpg",
},
{
  email: "kavya.iyer@example.in",
  fullName: "Kavya Iyer",
  password: "123456",
  profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
},
{
  email: "isha.patel@example.in",
  fullName: "Isha Patel",
  password: "123456",
  profilePic: "https://randomuser.me/api/portraits/women/5.jpg",
},
{
  email: "meera.kapoor@example.in",
  fullName: "Meera Kapoor",
  password: "123456",
  profilePic: "https://randomuser.me/api/portraits/women/6.jpg",
},
{
  email: "aarti.nair@example.in",
  fullName: "Aarti Nair",
  password: "123456",
  profilePic: "https://randomuser.me/api/portraits/women/7.jpg",
},

{
  email: "rohan.khanna@example.in",
  fullName: "Rohan Khanna",
  password: "123456",
  profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
},
{
  email: "karan.reddy@example.in",
  fullName: "Karan Reddy",
  password: "123456",
  profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
},
{
  email: "vikram.banerjee@example.in",
  fullName: "Vikram Banerjee",
  password: "123456",
  profilePic: "https://randomuser.me/api/portraits/men/4.jpg",
},

];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();
