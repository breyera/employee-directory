import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getUsers: function () {
    return axios
      .get("https://randomuser.me/api/?results=15")
      .then((res) => {
        const users = res.data.results;
        const results = users.map((user) => {
          return {
            name: user.name.first + " " + user.name.last,
            email: user.email,
            image: user.picture.thumbnail,
          };
        });
        return results;
      })
      .catch((err) => console.log(err));
  },
};
