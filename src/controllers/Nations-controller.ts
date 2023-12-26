import { Request, Response } from "express";
import NationsService from "../services/Nations-service";

export default new (class NationsControllers {
  async create(req: Request, res: Response) {
    try {
      const data = req.body;

      const response = await NationsService.create(data);

      res.status(201).json(response);
    } catch (err) {
      res.status(500).json({ messages: "Internar Server Error" });
    }
  }

  async find(req: Request, res: Response) {
    try {
      const data = req.body;

      const response = await NationsService.get(data);

      res.status(200).json(response);
    } catch (err) {
      res.status(500).json({ messages: "Internar Server Error" });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const { id, data } = req.params;

      const response = await NationsService.getById(id, data);

      res.status(200).json(response);
    } catch (err) {
      res.status(500).json({ messages: "Internar Server Error" });
    }
  }

  async put(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const data = req.body;

      const response = await NationsService.update(id, data);
      res.status(200).json(response);
    } catch (err) {
      res.status(500).json({ messages: "Internar Server Error" });
    }
  }

  async del(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const response = await NationsService.delete(id)
      res.status(200).json(response);
    } catch (err) {
      res.status(500).json({ messages: "Internar Server Error" });
    }
  }
})();
