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
    const {
      propertyName: house_name,
      address,
      city,
      state,
      zipcode,
      image,
      monthlyMortgage: monthly_mortgage,
      desiredRent: desired_rent
    } = req.body;

    dbInstance
      .add_house(
        house_name,
        address,
        city,
        state,
        zipcode,
        image,
        monthly_mortgage,
        desired_rent
      )
      .then(() => {
        res.sendStatus(200);
      })
      .catch(error => {
        res.status(500).send(error);
        console.log(error);
      });
  },
  deleteHouse: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { house_id } = req.params;

    dbInstance
      .delete_house([house_id])
      .then(() => res.sendStatus(200))
      .catch(error => {
        console.log("did not delete", error);
        res.status(500).send(error, { errorMessage: "error at deleteProduct" });
      });
  }
};
