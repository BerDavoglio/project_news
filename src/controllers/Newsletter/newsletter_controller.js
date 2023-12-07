/* eslint-disable class-methods-use-this */
import Newsletter from '../../models/Newsletter/Newsletter_models';

const Sequelize = require('sequelize');

class NewsletterController {
  // Creating the Newsletter:
  async store(req, res) {
    try {
      const newsletter = await Newsletter.create(req.body);

      return res.json(newsletter);
    } catch (err) {
      return res.status(400).json({ errors: err.message });
    }
  }

  // Show One New:
  async index(req, res) {
    try {
      const newsletter = await Newsletter.findByPk(req.params.id);
      if (!newsletter) {
        return res.status(400).json({ errors: ['News not Found'] });
      }

      return res.json(newsletter);
    } catch (err) {
      return res.status(400).json({ errors: err.message });
    }
  }

  // Show All News:
  async show(req, res) {
    try {
      const newsletters = await Newsletter.findAll();

      return res.json(newsletters);
    } catch (err) {
      return res.status(400).json({ errors: err.message });
    }
  }

  // Show Daily News:
  async showSearch(req, res) {
    const { Op } = Sequelize;
    try {
      const newsletters = await Newsletter.findAll({
        where: {
          title: { [Op.like]: `%${req.params.message}%` },
        },
      });

      return res.json(newsletters);
    } catch (err) {
      return res.status(400).json({ errors: err.message });
    }
  }

  // Show Daily News:
  async showDaily(req, res) {
    try {
      const newsletters = await Newsletter.findAll({
        where: {
          tag: 'daily',
          ischoosen: req.params.ischoosen,
        },
      });

      return res.json(newsletters);
    } catch (err) {
      return res.status(400).json({ errors: err.message });
    }
  }

  // Show Weekly News:
  async showWeekly(req, res) {
    try {
      let newsletters;

      if (req.params.ischoosen === 'true') {
        newsletters = await Newsletter.findAll({
          where: {
            tag: 'weekly',
            ischoosen: true,
          },
        });
      } else {
        newsletters = await Newsletter.findAll({
          where: {
            tag: 'weekly',
          },
        });
      }

      return res.json(newsletters);
    } catch (err) {
      return res.status(400).json({ errors: err.message });
    }
  }

  // Show Monthly News:
  async showMonthly(req, res) {
    try {
      let newsletters;

      if (req.params.ischoosen === 'true') {
        newsletters = await Newsletter.findAll({
          where: {
            tag: 'monthly',
            ischoosen: true,
          },
        });
      } else {
        newsletters = await Newsletter.findAll({
          where: {
            tag: 'monthly',
          },
        });
      }

      return res.json(newsletters);
    } catch (err) {
      return res.status(400).json({ errors: err.message });
    }
  }

  // Show Globaly News:
  async showGlobaly(req, res) {
    try {
      let newsletters;

      if (req.params.ischoosen === 'true') {
        newsletters = await Newsletter.findAll({
          where: {
            tag: 'globaly',
            ischoosen: true,
          },
        });
      } else {
        newsletters = await Newsletter.findAll({
          where: {
            tag: 'daily',
          },
        });
      }

      return res.json(newsletters);
    } catch (err) {
      return res.status(400).json({ errors: err.message });
    }
  }

  // Update the Newsletter:
  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ errors: ['ID not Found'] });
      }

      const newsletter = await Newsletter.findByPk(id);
      if (!newsletter) {
        return res.status(400).json({ errors: ['News not Found'] });
      }

      await newsletter.update(req.body);

      return res.json(newsletter);
    } catch (err) {
      return res.status(400).json({ errors: err.message });
    }
  }

  // Delete the Newsletter:
  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ errors: ['ID not Found'] });
      }

      const newsletter = await Newsletter.findByPk(id);
      if (!newsletter) {
        return res.status(400).json({ errors: ['News not Found'] });
      }

      await newsletter.destroy();
      return res.json({ message: 'News has been Deleted' });
    } catch (err) {
      return res.status(400).json({ errors: err.message });
    }
  }
}

export default new NewsletterController();
