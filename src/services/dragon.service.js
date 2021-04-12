import axios from 'axios'

export class DragonService {
  constructor(baseURL) {
    this.http = axios.create({
      baseURL
    })
  }

  async getDragons() {
    return this.http.get()
  }

  async getDragonById(id) {
    return this.http.get(id)
  }

  async createDragon(payload) {
    return this.http.post('', payload)
  }

  async updateDragon(payload) {
    console.log('here')
    const { id, ...updatedData } = payload
    console.log(id, updatedData)
    return this.http.put(id, updatedData)
  }

  async deleteDragon(id) {
    return this.http.delete(id)
  }
}
