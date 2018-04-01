
const AspectRatio = {
    Square : 0,
    Pillarbox : 1,
    Letterbox : 2,

    computeViewPort(currentAspectRatio, desiredAspect) {

        let ratioBox = {
            x : 0,
            y : 0,
            w : 1,
            h : 1,
            style : 0,
        };

        // If the current aspect ratio is already approximately equal to the desired aspect ratio,
        // use a full-screen Rect (in case it was set to something else previously)
        if (Math.round(currentAspectRatio * 100) / 100 == Math.round(desiredAspect * 100) / 100)
        {
            return ratioBox;
        }

        // Pillarbox
        if (currentAspectRatio > desiredAspect)
        {
            let inset = 1.0 - desiredAspect / currentAspectRatio;
            ratioBox.x = inset / 2;
            ratioBox.y = 0;
            ratioBox.w = 1.0 - inset;
            ratioBox.h =  1.0;
            ratioBox.style = AspectRatio.Pillarbox;
        }
        else  // Letterbox
        {
            let inset = 1.0 - currentAspectRatio / desiredAspect;

            ratioBox.x = 0;
            ratioBox.y = inset / 2;
            ratioBox.w = 1.0;
            ratioBox.h = 1.0 - inset;
            ratioBox.style = AspectRatio.Letterbox;
        }

        return ratioBox;
    }
}

export default AspectRatio;