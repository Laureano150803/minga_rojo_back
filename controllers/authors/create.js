import Author from '../../models/Author.js';

const create = async (req, res, next) => {
  try {
    const { firebaseUrl } = req.file || '';
    const { name, last_name, city, createdAt } = req.body;

    const author = new Author({
      name,
      last_name,
      city,
      createdAt,
      photo: firebaseUrl
    });

    author.active = false;
    console.log(author);

    await author.save();
    res.status(200).json({ message: 'Author created successfully' });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export default create;