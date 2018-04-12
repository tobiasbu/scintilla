
export default function SetSpritesheetFrame(animationControl, keyFrame) {

    if (animationControl._spriteModule === null)
        return;

    if (keyFrame.image === null)
        return;

    if (animationControl._spriteModule.source !== keyFrame.image) {
        animationControl._spriteModule.setImage(keyFrame.image, false);
    }

    animationControl._spriteModule.setFrameRect(keyFrame.frame);
    
    
}