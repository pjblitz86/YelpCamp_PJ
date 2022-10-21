const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Database connected');
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 50; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 20) + 10;
    const camp = new Campground({
      author: '634e774144b1a28b133d780f',
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure cumque perferendis consequatur, esse tenetur deserunt. Iusto sit delectus illum necessitatibus!',
      price,
      images: [
        {
          url: 'https://res.cloudinary.com/dmxvksruc/image/upload/v1666333688/YelpCamp/wj3rthw1ywahbblfpfy9.jpg',
          filename: 'YelpCamp/wj3rthw1ywahbblfpfy9'
        },
        {
          url: 'https://res.cloudinary.com/dmxvksruc/image/upload/v1666333693/YelpCamp/yveokzs5lqgvwv49l3gd.jpg',
          filename: 'YelpCamp/yveokzs5lqgvwv49l3gd'
        }
      ]
    });
    await camp.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
