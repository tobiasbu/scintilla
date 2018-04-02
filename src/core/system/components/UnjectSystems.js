
export default function UnjectSystems(scene) {

        for (let property in gameSystems) {
            scene[sys.name] = undefined;
        }
}