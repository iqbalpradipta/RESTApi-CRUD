import { Repository } from "typeorm";
import { National } from "../entity/National";
import { AppDataSource } from "../data-source";

export default new (class NationsService {
  private readonly NationRepository: Repository<National> = AppDataSource.getRepository(National);

  async create(data: any): Promise<object | string> {
    try {
      const response = await this.NationRepository.save(data);

      return {
        messages: "Success create data",
        data: response,
      };
    } catch (err) {
      console.log(err);
      return `message: something error when creating new nations`;
    }
  }

  async get(data: any) : Promise<object | string> {
    try {
      const response = await this.NationRepository.find(data)

      return{
        messages: 'Success get data',
        data: response,
      }

    } catch (err) {
      return `message: Error get data`
    }
  }

  async getById(id: any, data: any) : Promise<object | string >{
    try {
      const responseId = await this.NationRepository.find({
        where: {
          id: id
        }
      })
      const response = await this.NationRepository.find(data)

      return{
        messages: `Success get data by id = ${id}`,
        data: responseId,
      }
    } catch (err) {
      return `message: Error get data by Id`
    }
  }

  async update(id: any, data: any) : Promise<object | string> {
    try {
      const response = await this.NationRepository.update(id, data)
      const responseId = await this.NationRepository.findBy({
        id: id
      })

      return{
        messages: `Success update data`,
        data: responseId
      }
    } catch (err) {
      console.log(err)
      return `message: Error Update data`
    }
  }

  async delete(id: any) : Promise<object | string> {
    try {
      const responseId = await this.NationRepository.find({
        where: {
          id: id
        }
      })

      const response = await this.NationRepository.delete(id)

      return {
        messages: `Success delete data`,
        data: responseId
      }
    } catch (err) {
      return `message: Error delete data`
    }
  }

})();
