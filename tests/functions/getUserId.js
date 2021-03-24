const axios = require('axios');

const { URL } = require('../../constants');

module.exports = async () => {
  const response = await axios.post('/login', {
    query: `
    mutation{
      login(data:{
                email:"testdb2@test.com",
                password:"password"
      }){
        user{
        _id
        }
        accessToken
        refreshToken
      }
    }
    `,
  });

  const { data } = response;
  return data.data.login.user._id;
};
