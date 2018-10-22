module.exports = {
  getHouses: (req, res, next) => {
    const dbInstance = req.app.get("db");

    dbInstance
      .get_houses()
      .then(houses => {
        res.status(200).send(houses);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send(error);
      });
  },
  addHouse: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { house_name, address, city, state, zipcode } = req.body;

    dbInstance
      .add_house(house_name, address, city, state, zipcode)
      .then(() => {
        res.sendStatus(200);
      })
      .catch(error => {
        res.status(500).send(error);
        console.log(error);
      });
  }
};
