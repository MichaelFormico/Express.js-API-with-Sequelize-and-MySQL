const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    // Find all categories
    const categories = await Category.findAll({
      include: [{ model: Product}], // Include associated Products
    });
    res.json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    // Find one category by its `id` value
    const category = await Category.findByPk(req.params.id, {
      include: [Product], // Include associated Products
    });
    if (!category) {
      res.status(404).json({ message: 'No category found with this id' });
      return;
    }
    res.json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    // Create a new category
    const category = await Category.create(req.body);
    res.status(201).json(category);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    // Update a category by its `id` value
    const updatedCategory = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!updatedCategory[0]) {
      res.status(404).json({ message: 'No category found with this id' });
      return;
    }
    res.json(updatedCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    // Delete a category by its `id` value
    const deletedCategory = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!deletedCategory) {
      res.status(404).json({ message: 'No category found with this id' });
      return;
    }
    res.json(deletedCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
