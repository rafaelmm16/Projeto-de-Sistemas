import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Points from "../models/Points";
import orphanageView from "../views/points_view";
import * as Yup from "yup";
import points_view from "../views/points_view";

// Controllers
export default {
  async index(req: Request, res: Response) {
    const pointsRepository = getRepository(Points);

    const points = await pointsRepository.find({
      relations: ["images"],
    });

    return res.json(points_view.renderMany(points));
  },

  // Show a Specified Orphanage
  async show(req: Request, res: Response) {
    const { id } = req.params;
    const pointsRepository = getRepository(Points);

    const points = await pointsRepository.findOneOrFail(id, {
      relations: ["images"],
    });

    return res.json(points_view.render(points));
  },

  // Show accepted orphanages
  async accepted(req: Request, res: Response) {
    const pointsRepository = getRepository(Points);

    const points = await pointsRepository.find({
      relations: ["images"],
    });

    const acceptedArray = [] as Points[];

    points.map((points) => {
      if (points.is_accepted) {
        acceptedArray.push(points);
      }
    });

    return res.json(orphanageView.renderMany(acceptedArray));
  },

  // Show pendents orphanages
  async pendents(req: Request, res: Response) {
    const pointsRepository = getRepository(Points);

    const points = await pointsRepository.find({
      relations: ["images"],
    });

    const pendentsArray = [] as Points[];

    points.map((points) => {
      if (!points.is_accepted) {
        pendentsArray.push(points);
      }
    });

    return res.json(points_view.renderMany(pendentsArray));
  },

  // Create a Single Orphanage
  async create(req: Request, res: Response) {
    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
    } = req.body;
    const pointsRepository = getRepository(Points);

    // Handle the orphanage image and save
    const requestImages = req.files as Express.Multer.File[];
    const images = requestImages.map((image) => {
      return { path: image.filename };
    });

    const data = {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends: open_on_weekends === "true",
      images,
      is_accepted: false,
    };

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      latitude: Yup.number().required(),
      longitude: Yup.number().required(),
      about: Yup.string().required().max(300),
      instructions: Yup.string().required(),
      opening_hours: Yup.string().required(),
      open_on_weekends: Yup.boolean().required(),
      images: Yup.array(
        Yup.object().shape({
          path: Yup.string().required(),
        })
      ),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    const points = pointsRepository.create(data);

    await pointsRepository.save(points);

    return res.status(201).json(points);
  },

  // Edit an orphanage
  async editOrphanage(req: Request, res: Response) {
    console.log(req.body);
    const {
      id,
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
    } = req.body;

    const pointsRepository = getRepository(Points);

    // Handle the orphanage image and save
    const requestImages = req.files as Express.Multer.File[];
    const images = requestImages.map((image) => {
      return { path: image.filename };
    });

    const data = {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends: open_on_weekends === "true",
      images,
      is_accepted: true,
    };

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      latitude: Yup.number().required(),
      longitude: Yup.number().required(),
      about: Yup.string().required().max(300),
      instructions: Yup.string().required(),
      opening_hours: Yup.string().required(),
      open_on_weekends: Yup.boolean().required(),
      images: Yup.array(
        Yup.object().shape({
          path: Yup.string().required(),
        })
      ),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    await pointsRepository.update(id, data);

    return res.status(201).json(data);
  },

  // Delete an orphanage
  async deleteOrphanage(req: Request, res: Response) {
    const { id } = req.params;
    const pointsRepository = getRepository(Points);

    await pointsRepository.delete(id);

    return res.status(201).json({ message: "excluido com sucesso" });
  },

  // accept and orphanage
  async acceptOrphanage(req: Request, res: Response) {
    const { id } = req.params;
    const pointsRepository = getRepository(Points);

    await pointsRepository.update(id, { is_accepted: true });

    return res.status(201).json({ message: "aceito com sucesso" });
  },
};