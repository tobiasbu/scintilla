import Scene from "../Scene";
import Version from "../../Define";
import MathUtils from "../../math/MathUtils";
import TransitionBehavior from "../../render/transition/TranstionBehavior";

export default class ScintillaLoadingScreen extends Scene {

  constructor(game) {
    super('Scintilla Loading Scene');

    //let blob;
    // let logoData = ["%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath d='M224%20387.814V512L32 320l192-192v126.912C447.375 260.152 437.794 103.016 380.93 0 521.287 151.707 491.48 394.785 224 387.814z'/%3E%3C/svg%3E"];


    // try {
    //     blob = new window.Blob(logoData, { type: 'data:image/svg+xml;charset=utf-8' });
    // } catch (e) {
    //     console.error('Could not create Logo:', e);
    // }


    this.scintillaLogo = new Image();
    this.scintillaLogo.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQwIiBoZWlnaHQ9IjI2MC45OCIgdmlld0JveD0iMCAwIDYzLjUgNjkuMDUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI2RjMzBhOSI+PHBhdGggZD0iTTQzLjQ5IDM2Ljg1NmwtMTQuMTgtNi40MzRMNi45NTYgNDkuNzg0bDE5LjM2Mi0yNy4yNC02LjU3Ni05LjU2OCAxNC40NTUgNi41NzVMNTYuNTUxLjE5IDM3LjE5IDI3LjQzeiIgcGFpbnQtb3JkZXI9InN0cm9rZSBtYXJrZXJzIGZpbGwiLz48cGF0aCBkPSJNMTEuMTIgMzYuOTA4bC0uNTQzLTEuMDQxLTEuMDM2LjU0My41MzggMS4wMzZ6bS0xLjg4OC00LjE3NmwtLjM2LTEuMTE2LTEuMTE2LjM2MS4zNjYgMS4xMTV6bS0xLjA2NC00LjQ1NmwtLjA5Ny0uNjM1di0uMDNsLS4wMDYtLjAzLS4wMy0uNDI5LTEuMTY2LjA4LjAzNC40OC4wMDYuMDQ3LjEwMy42ODZ6bS0uMTAzLTUuNjk4bC0xLjE2Ny0uMTA4LS4xMDggMS4xNjcgMS4xNjcuMTA4em0uODY0LTQuNDMzbC4wMDYtLjAzLjAwNi0uMDMtLjMwMy0uMDgtLjgxMi0uMjgxLS4wMDYuMDMtLjAxMi4wNDYtLjI4NiAxLjExNSAxLjEzMi4yOTN6bTEuNDE5LTMuNjMzbC4zMzctLjYyMy0xLjAzLS41NTUtLjM2LjY2My0uMDE4LjA0Mi0uMTcxLjM4MyAxLjA3NS40N3ptMi44NTQtNC40NWwtLjkyNi0uNzIxLS43MjEuOTI3LjkyNy43MTV6bTMuMTg3LTMuMjlsLS43OS0uODYzLS44NjQuNzk1Ljc5Ni44NTh6bTMuMTgtMi4yNjVsLjAzLS4wM2guMDExbC41MjEtLjI4LS41Ni0xLjAzLS41NjEuMzAyLS4wNC4wMy0uNDQ3LjI5My42NDEuOTg0ek00Mi42NDUgMi41bC0uMjUxLS4xMzItLjA0Ni0uMDMtLjgxOC0uMzQzLS40NTIgMS4wNzUuNzcyLjMyNi4yNTIuMTMyem0tMTguMzIzLS4xMzJsLS4zODMtMS4xMS0xLjEwNC4zODQuMzgzIDEuMTA0ek0zOC4xMi44MjhMMzYuOTgyLjU1M2wtLjI2OSAxLjE0NCAxLjEzOC4yN3ptLTkuNTA3LjUzOGguMTMzTDI4LjY0My4xOTloLS4xODNsLTEuMDE4LjE3OC4yIDEuMTU2em00LjgtMS4zMDRMMzIuNTIgMGgtLjMyNmwuMDEyIDEuMTY3aC4yMzVsLjg4Ni4wNjJ6TTUyLjM4IDEzLjA2NWwuNTM4IDEuMDQgMS4wNC0uNTQyLS41NDMtMS4wMzZ6bTEuODgyIDQuMTc2bC4zNjYgMS4xMTUgMS4xMS0uMzYtLjM2LTEuMTE2em0xLjA2NCA0LjQ1NmwuMTAzLjY0di4wM2wuMDA2LjAzLjAyOS40MyAxLjE2Ny0uMDc4LS4wMzQtLjQ4LS4wMDYtLjA0Ny0uMTAzLS42ODZ6bS4xMDkgNS42OThsMS4xNjcuMTA4LjEwMy0xLjE2Ny0xLjE2Ny0uMTA4em0tLjg2NCA0LjQzM2wtLjAwNi4wMy0uMDA2LjAzLjI5Mi4wOC44MTguMjgxLjAxMi0uMDMuMDEyLS4wNDguMjg1LTEuMTEtMS4xMzItLjI5MnptLTEuNDAyIDMuNTkzbC0uMDEyLjAzLS4wMTIuMDMtLjMzNy42MTcgMS4wMzUuNTU1LjM1NS0uNjYzLjAyMy0uMDQyLjE2Ni0uMzg0LTEuMDctLjQ2OXptLTIuODcxIDQuNDlsLjkyNi43MjEuNzE1LS45MjctLjkyNi0uNzE1em0tMy4xOTIgMy4yOWwuNzk1Ljg2My44NjMtLjc5NS0uNzk1LS44NTh6bS0zLjE3NSAyLjI2NWwtLjAzLjAzaC0uMDEybC0uNTIuMjguNTU1IDEuMDMuNTYtLjMwMy4wNDYtLjAzLjQ0Ni0uMjkzLS42NC0uOTg0em0tMjMuMDc2IDIuMDA4bC4yNTEuMTMyLjA0LjAzLjgxOS4zNDMuNDU3LTEuMDc2LS43NzgtLjMyNmgtLjAwNmwtLjAzNC0uMDMtLjIxMi0uMTE0em0xOC4zMTcuMTM4bC4zODMgMS4xMDQgMS4xMS0uMzg0LS4zODQtMS4xMDR6bS0xMy43OTggMS41MzNsMS4xNDQuMjc1LjI2OS0xLjE0NC0xLjE0NC0uMjd6bTkuNTEzLS41MzhoLS4xMzhsLjEwOCAxLjE2N2guMTgzbDEuMDE5LS4xNzgtLjItMS4xNTZ6bS00LjggMS4zMDRsLjg5My4wNjRoLjMybC0uMDEyLTEuMTY3aC0uMjI5bC0uODkyLS4wNjR6IiBjb2xvcj0iIzAwMCIgc29saWQtY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmb250LWZlYXR1cmUtc2V0dGluZ3M6bm9ybWFsO2ZvbnQtdmFyaWFudC1hbHRlcm5hdGVzOm5vcm1hbDtmb250LXZhcmlhbnQtY2Fwczpub3JtYWw7Zm9udC12YXJpYW50LWxpZ2F0dXJlczpub3JtYWw7Zm9udC12YXJpYW50LW51bWVyaWM6bm9ybWFsO2ZvbnQtdmFyaWFudC1wb3NpdGlvbjpub3JtYWw7aXNvbGF0aW9uOmF1dG87bWl4LWJsZW5kLW1vZGU6bm9ybWFsO3NoYXBlLXBhZGRpbmc6MDt0ZXh0LWRlY29yYXRpb24tY29sb3I6IzAwMDt0ZXh0LWRlY29yYXRpb24tbGluZTpub25lO3RleHQtZGVjb3JhdGlvbi1zdHlsZTpzb2xpZDt0ZXh0LWluZGVudDowO3RleHQtb3JpZW50YXRpb246bWl4ZWQ7dGV4dC10cmFuc2Zvcm06bm9uZSIgcGFpbnQtb3JkZXI9InN0cm9rZSBtYXJrZXJzIGZpbGwiIHdoaXRlLXNwYWNlPSJub3JtYWwiLz48cGF0aCBkPSJNNi4zMiA2NS43MjhxLS4xMDcgMS4zMzMtLjkxIDIuMjc2LS41MjguNjQyLTEuNDA1LjktLjQ3NS4xNDctMS4wODIuMTQ3LTEuMTMxIDAtMS44MTgtLjU1OS0uNTctLjQ2LS44NTgtMS4yNDMtLjI4OC0uNzg5LS4yNDUtMS44MTVsMS44MzQtLjEyNnEuMDIgMS4xMS40NCAxLjYwNi4zMDYuMzc3Ljc1NS4zNTYuNjMtLjAzIDEuMDY0LS42MTQuMjI0LS4zLjI3Ni0uODQ1LjA3Ny0uODAzLS41NjctMS41ODUtLjUyMS0uNTM4LTEuNTU2LTEuNjEzLS44NjktLjkyMi0xLjE5LTEuNjU1LS4zNDYtLjgyMy0uMjU0LTEuNzg3LjE2Ni0xLjczOCAxLjQxOC0yLjYzMlEyLjk5MiA1NiA0LjA2IDU2cTEuMDI2IDAgMS43MTUuNDYxLjUzMS4zNTYuODE5Ljk5OS4yODguNjM1LjI4NSAxLjQ2NmwtMS44NzUuMzM1cS0uMDAyLS43ODItLjMzLTEuMjE1LS4yMzUtLjMyMS0uNzMtLjMyMS0uNTI0IDAtLjg0OC40NjgtLjI2LjM3Ny0uMzEzLjkzNS0uMDg0Ljg3My41ODMgMS43OC4yNTQuMzQzLjc3NC44MS42MTcuNTU5LjgxMi43ODIuNjM3LjcxMi45NjIgMS40MDQuMTUuMzIuMjM2LjYuMjA3LjY3Ny4xNjkgMS4yMjJ6bTQuOTYgMy4zMnEtMS4yNyAwLTIuMDcyLS44ODctLjgwMi0uODg2LS42ODEtMi4xNWwuNjY3LTYuOTc1cS4xMjEtMS4yNjMgMS4xLTIuMTUuOTgtLjg5NCAyLjIzNi0uODk0IDEuMjcgMCAyLjA2NS44OTQuOC44OTMuNjggMi4xNWwtLjEzOSAxLjQ1MmgtMS45OWwuMTQzLTEuNDg3cS4wNDQtLjQ2LS4yNTMtLjc4Mi0uMjktLjMyOC0uNzUtLjMyOC0uNDU1IDAtLjgwNy4zMjgtLjM1Mi4zMjItLjM5Ni43ODJsLS42NyA2Ljk4OXEtLjA0My40Ni4yNDcuNzgyLjI5LjMyMS43NDQuMzIxLjQ2MSAwIC44MTMtLjMyMS4zNTktLjMyMS40MDMtLjc4MmwuMTY4LTEuNzUyaDEuOTlsLS4xNyAxLjc3M3EtLjEyMiAxLjI3LTEuMSAyLjE1Ny0uOTc4Ljg4LTIuMjI4Ljg4em03LjE5LS4xNmgtMS45MTNsMS4yMi0xMi43MzVoMS45MTJ6bTUuNzQtMTIuNzM0bDEuNzIzIDguNTUzLjgxOC04LjU1M2gxLjkybC0xLjIxOSAxMi43MzVoLTIuMDZsLTEuODY1LTguMTU1LS43OCA4LjE1NWgtMS45MTRsMS4yMi0xMi43MzV6bTguNTMgMS45MjFoLTIuMDM5bC4xODQtMS45Mmg1Ljk5bC0uMTgzIDEuOTJIMzQuNjZMMzMuNjI1IDY4Ljg5aC0xLjkyem03LjAzIDEwLjgxM2gtMS45MTNsMS4yMi0xMi43MzVoMS45MTJ6bTcuNiAwaC01LjIzbDEuMjItMTIuNzM1aDEuOTEzbC0xLjAzNyAxMC44MjloMy4zMTZ6bTcuMjEgMGgtNS4yM2wxLjIyLTEyLjczNWgxLjkxM2wtMS4wMzcgMTAuODI5aDMuMzE2em00LjczLTIuOTJsLS43NDggMi45MjVoLTEuOTk3bDMuMzc3LTEyLjczNWgyLjY0NmwuOTEgMTIuNzM1aC0yLjAxbC0uMTc0LTIuOTI1em0xLjY2NS02Ljg5MWwtMS4xOTMgNS4wMmgxLjQyNXoiLz48L2c+PC9zdmc+"
    this._loaded = false;
    let self = this;
    this._finished = false;
    //"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA0CAQAAABxuOPTAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfiBAEENCBdKapvAAABjklEQVRYw+2YSxKDIAyGA6seyiXH8mgsORS7dAFpUMNDJ9CNmakFAnz8MVIswCPbkT8L7IqS4REVgSO2HKiGvQOMa+7yGbhY5XKdhFPV2ZpMLaz3gqeIPd5PeeJaWBX3qiNYqqnn7VVrPayqu/JZl3ISSWstEb2wPtDaHjLhbo4nUwunrHQUOyWN2kBFpRJ26iMjp49qgHuPTDvQKkpbW5+i1n1wa5fAijp7P21/OP+wT0Hnws3uefDUdP7pNLtY5ULgPexE4Ohr4tR31H11er322muPdqXrealWYrPrkQNQgI8ZXVDqGbt/GRh20eSp/jERz7jUQn7qe10Ut5Z+HmdTM08WsaxJx02GUMvIgabsYwMA+AIcsuqQO3vk75CRoQhnyCN5LPu5nKQUYz1G5KmPq5V9tbaWn+aKCGABnAmFonAIijPXVUtKSHXd79H9lNqIAM4AbBm7/fDJNqF8biM1W3WMx9JnA3hkRaXqdD1GQW6j1AqdMVS3zgB49FkvXT16dIaDPFaq+5kC4MwX1X+rgjIvVdUAAAAASUVORK5CYII=";
    //this.scintillaLogo.src = blob;

    this.progress = 0;
    this.fromProgress = 0;
    this.toProgress = 0;
    this.t = 0;
    this.game = game;
    this.nextScene = null;
    this.preloadingDone = false;


    let setLoadingPos = function () {
      this._midPos = { x: (320 / 2), y: (240 / 2) };
      this._barColor = '#dc30a9';
      this._barPosX = 160 - (this.scintillaLogo.width * 0.3 * 0.5);
      this._barPosY = 120 - 16 + (this.scintillaLogo.height * 0.3 * 0.5) + 8;
      this._barPosW = this.scintillaLogo.width * 0.3;
    };

    this.scintillaLogo.onload = function () {
      self._loaded = true;
      setLoadingPos.call(self);
    };

    let drawFunc = function (draw) {
      if (this._loaded) {

        if (this.scintillaLogo) {
          draw.imageExtra(this.scintillaLogo, 160, 120 - 16, 0.3, 0.3, 0.5, 0.5); //131,73);
        }

        draw.color = this._barColor;
        draw.outlineRect(this._barPosX, this._barPosY, this._barPosW, 7);
        draw.rect(this._barPosX + 2, this._barPosY + 2, (this._barPosW - 4) * this.progress, 3);
        draw.font('Verdana', 6);
        draw.text('WIP - ' + Version.VERSION, 320 - 4, 240 - 4, '#490c37', 'right');


      }

      //draw.outlineRect(0, 0, 320, 240, 4, 'yellow');

    };

    let loadingFunc = function (dt) {

      if (!this._finished) {
        this.t += dt / 0.15;

        if (this.t >= 1)
          this.t = 1.0;

        if (!this.preloadingDone) {
          let prog = this.load.progress;

          if (prog >= 1.0)
            this.preloadingDone = true;

          if (prog > this.progress) {
            this.fromProgress = this.progress;
            this.toProgress = prog;
            this.t = 0;
          }



        } else {
          this.wait += dt;

          if (this.wait >= 1.25) {
            //this.preloadDone(TransitionBehavior.FADEIN);
            let done = () => {
              this.transition.reset();
              this.ui.setSize(this.userData.ui.w, this.userData.ui.h);
              this.ui.setViewport(this.userData.vp.x, this.userData.vp.y, this.userData.vp.w, this.userData.vp.h);
              this.ui.resolution = this.userData.res;
              this.ui.viewportOffset.set(0, 0);
              this.preloadDone();
              
            };
            this.transition.in();
            this.events.subscribeOnce('transition_end', done, this);
            this._finished = true;

          }
        }

        this.progress = MathUtils.lerp(this.fromProgress, this.toProgress, this.t);

      }
    };

    this.loading = loadingFunc;
    this.update = loadingFunc;
    this.loadingGUI = drawFunc;
    this.gui = drawFunc;

    this.userData = {
      ui: {
        w: 0,
        h: 0
      },
      vp: {
        x: 0,
        y: 0,
        w: 1,
        h: 1,
      },
      res: 1
    }
  }

  init(next) {


    this.userData.ui.w = this.ui.width;
    this.userData.ui.h = this.ui.height;
    this.userData.vp.x = this.ui.viewport.x;
    this.userData.vp.y = this.ui.viewport.y;
    this.userData.vp.w = this.ui.viewport.width;
    this.userData.vp.h = this.ui.viewport.height;
    this.userData.res = this.ui.resolution;

    this.nextScene = next;
    this.wait = 0;
    this.t = 0;
    this.progress = 0;
    this.preloadingDone = false;
    this.ui.setSize(320, 240);
    this.ui.setViewportByAspectRatio(1.33333333333);
    this.transition.settings.setInDuration(0.35);

  }

  start() {
    //this.progress = 1;
  }

}