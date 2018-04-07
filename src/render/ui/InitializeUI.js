import Debug from "./Debug";

export default function InitializeUI() {
    this.canvas = this.game.system.render.canvas;
    this.context = this.game.system.render.context;
    this.draw.init();

    if (this.game.config.debug)
        this.debug = new Debug(this.game, this.draw);
}