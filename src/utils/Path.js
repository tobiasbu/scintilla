
const Path = {

  getExtension(filename) {
    return filename.substring(filename.lastIndexOf('.')+1, filename.length) || "";
  },

  getFilename(path) {
    return path.split('\\').pop().split('/').pop() || path;
  },
  
  getFilenameWithoutExtension(path) {
    return this.removeExtension(this.getFilename(path));
  },

  removeExtension(path) {
    return path.substr(0, path.lastIndexOf('.')) || path;
  },

  getPath(path) {
    return path.substr(0, path.lastIndexOf("/") + 1) || "";
  },

  getRootPath(path) {
    return path.substr(0, path.indexOf("/") + 1) || path;
  },

  getPathWithoutRoot(path) {
    let s = (path.indexOf("/") + 1) || 0;
    let l = (path.lastIndexOf("/") - s + 1) || path.length;
    return path.substr(s, l) || path;
  },

  getDirectoryName(path) {
      let dir = path.split('/');
      let len = dir.length;
      if (len <= 1)
        return dir[dir.length - 1];
      else
        return dir[dir.length - 2];
  },

  getURL(url, baseURL) {
    if (!url)
        return null;
    
        
    if (url.match(/^(?:blob:|data:|http:\/\/|https:\/\/|\/\/)/))
        return url;
    else
        return baseURL + url;
  }

}

Object.freeze(Path);

export default Path;