/**
 * Required External Modules and Interfaces
 */
 import express, { NextFunction, Request, Response } from "express";
 import * as ProfileService from "./profiles.service";
 import { BaseProfile, Profile } from "./profile.interface";
 import multer from 'multer';
import { ImageUtil } from "../utils/image.util";

const upload = multer({ dest: './resources/images' })
/**
 * Router Definition
 */
 export const profilesRouter = express.Router();
/**
 * Controller Definitions
 */

// GET profiles

profilesRouter.get("/", async (req: Request, res: Response) => {
    try {
      const profiles: Profile[] = await ProfileService.findAll();
  
      res.status(200).send(profiles);
    } catch (e) {
      res.status(500).send(e.message);
    }
  });

// GET profiles/:id

profilesRouter.get("/:id", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
  
    try {
      const profile: Profile = await ProfileService.find(id);
  
      if (profile) {
        return res.status(200).send(profile);
      }
  
      res.status(404).send("profile not found");
    } catch (e) {
      res.status(500).send(e.message);
    }
  });


profilesRouter.post("/", upload.single("avatar"), async (req: Request, res: Response) => {
    try {
      console.log(req.body);
      let profile: BaseProfile = req.body;
  
      let file = req.file;
      console.log(file?.path);
      let path: string = file?.path!;

      let imagetUtil: ImageUtil = new ImageUtil();
      profile.image = path;
      
      let resizeImagePath:string = imagetUtil.resizeAndCropImage(path);

      console.log("Creating new profile");
      profile.image = resizeImagePath;
      const newProfile: Profile = await ProfileService.create(profile);
  
      res.status(201).json({"id" : newProfile.id});
    } catch (e) {
      console.log(e);
      res.status(500).send(e.message);
    }
  });
// POST profiles
