import React from 'react'
import Axios from 'axios'
class vendor {

    create(data) {
        return Axios.post("/api/merchant/addCategory", data);
      }
}
export default new vendor();