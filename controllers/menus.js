const Menu=require('../models/menu.js');
const restaurant=require('../models/restaurant.js');

const createMenu=async(req, res,next) => {
    try {
      const { restaurant_id, food_items } = req.body; 
  
      const newMenu = new Menu({
        restaurant_id,
        food_items,
      });
  
      const savedMenu = await newMenu.save();

      console.log(req.body.restaurant_id)

      const Restaurant = await restaurant.findById(restaurant_id);
      if (!Restaurant) 
      {
        return res.status(404).json({ message: 'Restaurant not found' });
      }

      Restaurant.menu = savedMenu._id;
      await Restaurant.save();
      res.status(201).json(savedMenu); 
    } 
    catch (error) {
      res.status(400).json({ message: error.message });
    }
};
  

const updateMenu= async(req, res,next) => {
    try 
    {
      const id = req.params.id;
      const updates = req.body; 
  
      const updatedMenu = await Menu.findByIdAndUpdate(id, updates, { new: true }); 
      
      if (!updatedMenu) {
        return res.status(404).json({ message: 'Menu not found' });
      }
      const RestaurantId= updatedMenu.restaurant_id.toString() ;
      const updatedRestaurant = await restaurant.findById(RestaurantId);
      if (!updatedRestaurant) 
      {
        return res.status(404).json({ message: 'Restaurant not found' });
      }
      updatedRestaurant.menu = updatedMenu._id;
      await updatedRestaurant.save();
      res.json(updatedMenu);

    } catch (error) {
      res.status(400).json({ message: error.message });
    }
};

module.exports={createMenu,updateMenu};
  