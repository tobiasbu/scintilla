import TransitionBehavior from "../../render/transition/TranstionBehavior";

export default function TransitionBetweenScenes(sceneManager, delegate) {

    let transit = sceneManager._transition;

    sceneManager.game.system.transition.by(transit);
    if (transit === TransitionBehavior.FADEINOUT)
    {
        sceneManager.game.system.event.subscribeOnce('transition_pause_end', delegate);
    } else {
        sceneManager.game.system.event.subscribeOnce('transition_end', delegate);
    }
    sceneManager._transition = TransitionBehavior.NONE;
    sceneManager._isTranistioning = true;

}