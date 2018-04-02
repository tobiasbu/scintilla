import Scene from "../Scene";
import Version from "../../Define";
import MathUtils from "../../math/MathUtils";

export default class ScintillaLoadingScreen extends Scene {

    constructor(game) {
        super('Scintilla Loading Scene');

        this.scintillaLogo = new Image();
        let logoData ="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA0CAQAAABxuOPTAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfiBAEENCBdKapvAAABjklEQVRYw+2YSxKDIAyGA6seyiXH8mgsORS7dAFpUMNDJ9CNmakFAnz8MVIswCPbkT8L7IqS4REVgSO2HKiGvQOMa+7yGbhY5XKdhFPV2ZpMLaz3gqeIPd5PeeJaWBX3qiNYqqnn7VVrPayqu/JZl3ISSWstEb2wPtDaHjLhbo4nUwunrHQUOyWN2kBFpRJ26iMjp49qgHuPTDvQKkpbW5+i1n1wa5fAijp7P21/OP+wT0Hnws3uefDUdP7pNLtY5ULgPexE4Ohr4tR31H11er322muPdqXrealWYrPrkQNQgI8ZXVDqGbt/GRh20eSp/jERz7jUQn7qe10Ut5Z+HmdTM08WsaxJx02GUMvIgabsYwMA+AIcsuqQO3vk75CRoQhnyCN5LPu5nKQUYz1G5KmPq5V9tbaWn+aKCGABnAmFonAIijPXVUtKSHXd79H9lNqIAM4AbBm7/fDJNqF8biM1W3WMx9JnA3hkRaXqdD1GQW6j1AqdMVS3zgB49FkvXT16dIaDPFaq+5kC4MwX1X+rgjIvVdUAAAAASUVORK5CYII=";
        this.scintillaLogo.src = logoData;

        this.progress = 0;
        this.fromProgress = 0;
        this.toProgress = 0;
        this.t = 0;
        this.game = game;
        this.nextScene = null;
        this.preloadingDone = false;

        let drawFunc = function(draw) {
            draw.image(this.scintillaLogo, 131,73);
            draw.color = '#bcbcbc'
            draw.outlineRect(131, 132, 58, 7)
            draw.rect(133, 134, 54 * this.progress, 3);
            draw.font('Verdana', 6);
            draw.text('WIP - ' + Version.VERSION, 320 - 4, 240 - 4,'#787878','right');
        }

        let loadingFunc = function(dt) {

            this.t += dt / 0.15;

            if (this.t >= 1)
                this.t = 1.0;

            if (!this.preloadingDone)
            {
                let prog = this.load.progress;

                if (prog >= 1.0)
                    this.preloadingDone = true;

                if (prog > this.progress)
                {
                    this.fromProgress = this.progress;
                    this.toProgress = prog;
                    this.t = 0;   
                }

            } else {
                this.wait += dt;

                if (this.wait >= 2.0) {
                    this.preloadDone();
                }
            }

            
            this.progress = MathUtils.lerp(this.fromProgress, this.toProgress, this.t);
        }

        this.loading = loadingFunc;
        this.update = loadingFunc;
        this.loadingGUI = drawFunc;
        this.gui = drawFunc;
    }

    init(next) {
        this.nextScene = next;
        this.wait = 0;
        this.t = 0;
        this.progress = 0;
        this.preloadingDone = false;
        this.ui.setSize(320, 240);
        this.ui.setViewportByAspectRatio(1.33333333333);
        
    }

    start() {
        //this.progress = 1;
    }

}