
class PathUtils {

  getExtension(filename)
  {
    return filename.substring(filename.lastIndexOf('.')+1, filename.length) || "";
  }

}

export default new PathUtils();