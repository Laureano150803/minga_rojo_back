import Chapter from '../models/Chapter.js'

const nextOrder = async (req, res, next) => {
  const { order } = req.body;
  
  // Si el order ya está definido en el body, lo dejamos pasar
  if (order) {
    return next();
  }

  try {
    // Buscamos el último order del manga y le sumamos uno
    const lastOrder = await Chapter.findOne({ manga_id: req.body.manga_id })
                                  .sort({ order: -1 })
                                  .limit(1)
                                  .select('order');
    req.body.order = lastOrder.order + 1;

    // Pasamos al siguiente middleware
    next();
  } catch (err) {
    console.error(err);
    res.status(500).send('Error interno del servidor');
  }
};

export default nextOrder