import axios from "axios";
import { dragonAPIURL } from "../config";

export class DragonAPI {
  constructor() {
    this.http = axios.create({
      baseURL: dragonAPIURL,
    });
  }

  async getDragons() {
    return this.http.get();
  }

  async getDragonById(id) {
    return this.http.get(id);
  }

  async createDragon(payload) {
    return this.http.post("", payload);
  }

  async updateDragon(payload) {
    const { id, ...updatedData } = payload;
    return this.http.put(id, updatedData);
  }

  async deleteDragon(id) {
    return this.http.delete(id);
  }
}
