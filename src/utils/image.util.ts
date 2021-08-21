import sharp from "sharp";
import fs from "fs";

export class ImageUtil {
    public resizeAndCropImage(path: string) {

        let newPath: string = path + "_resized.jpg";
        sharp(path)
        .resize(200, 200)
        .toFile(newPath);
        
        // this.deleteImage(path);
        
        console.log(`New path: ${newPath}`)
        return newPath; 

    }

    //FIXME UnhandledPromiseRejectionWarning with using file deletion
    private async deleteImage(path: string) {
        try {
            fs.unlink(path, async (err) => {
                if (!err) {
                    console.log(`Deleted file ${path}`);
                } else {
                    console.log(err.stack);
                }
            });
        } catch(err) {
            console.log(err);
        }
       
    }
}
