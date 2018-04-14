
export default function SetSpritesheetFrame(spriteModule, keyFrame) {

    if (spriteModule === null)
        return;

    if (keyFrame.image === undefined || keyFrame.image === null)
        return;

    if (spriteModule.resource === null || spriteModule.resource !== keyFrame.image) {
        spriteModule.setImage(keyFrame.image, false);
    }

    spriteModule.setFrameRect(keyFrame.frame);    
    
}