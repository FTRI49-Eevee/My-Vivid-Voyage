import { supabase } from '../server.js';

const generalController = {
  // Function to get the map data for a user
  getMap: async (req, res, next) => {
    const { userId } = req.query;
    console.log('Fetching map for userId:', userId);

    try {
      const { data, error } = await supabase
        .from('user_states')
        .select('*')
        .eq('user_id', userId);

      if (error) {
        console.error('Error fetching data from Supabase:', error);
        return res.status(500).json({ message: 'Error fetching map data' });
      }

      if (!data || data.length === 0) {
        console.log('No map data found for this user');
        return res.status(404).json({ message: 'No data found for this user' });
      }

      console.log('Fetched data:', data);
      res.locals.getMap = data;
      return res.status(200).json(data);
    } catch (error) {
      console.error('Error fetching map data:', error);
      return res.status(500).json({ message: 'Error fetching map data' });
    }
  },

  // Function to save a map (visited state) for a user
  saveMap: async (req, res, next) => {
    const { userId, stateName, imageUrl, caption } = req.body;
    console.log(
      'Saving map data for userId:',
      userId,
      stateName,
      imageUrl,
      caption
    );

    try {
      const { data, error } = await supabase.from('user_states').insert([
        {
          user_id: userId,
          state_name: stateName,
          image_url: imageUrl,
          caption,
        },
      ]);

      if (error) {
        console.error('Error inserting data into Supabase:', error);
        return res.status(500).json({ message: 'Error saving map data' });
      }

      console.log('Saved data:', data);
      res.locals.saveMap = data;
      return res.status(200).json(data);
    } catch (error) {
      console.error('Error saving map data:', error);
      return res.status(500).json({ message: 'Error saving map data' });
    }
  },
};

export default generalController;
