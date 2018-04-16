
export default function ComputeTotalDuration(keyFrames) {

    let size = keyFrames.size;

    if (size === 0)
      return 0;
    else {

      let dur = 0;

      for (let i = 0; i < size; i++) {
        dur += keyFrames.at(i).duration || 0;
      }

      return dur;
    }

}